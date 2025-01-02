const { parseString } = require('xml2js');
const axios = require('axios'); // For making a request to BGG API

// Update this helper if more xml unicode appears in the descriptions
const { replaceXmlUnicode } = require('./replaceXmlUnicode');

// Converts XML into a JS object (promisified)
const convertXML = (xmlData) => (
  new Promise((resolve, reject) => {
    parseString(xmlData, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  })
);

/**
 * I: XML data converted into a JavaScript object.
 * O: An object with meaningful keys for Database storage.
 * C: N/A
 * E: May not have certain keys such as bestWith & recommendedWith.
 *    Use a conditional to deal with this.
 */
// Synchronous function
const buildGameObj = (convertedData) => {
  // Destructure important keys
  const {
    $,
    thumbnail,
    image,
    name,
    description,
    yearpublished,
    minplayers,
    maxplayers,
    playingtime,
    minplaytime,
    maxplaytime,
    minage,
  } = convertedData.items.item[0];

  // Build game info object
  // $ => means the data is inside the XML tag
  const bggObj = {
    bggId: +($.id),
    type: $.type,
    thumbnail: thumbnail[0],
    image: image[0],
    name: name[0].$.value,
    // Replace the XML unicode characters with meaningful characters
    description: replaceXmlUnicode(description[0]),
    yearPublished: +(yearpublished[0].$.value),
    minPlayers: +(minplayers[0].$.value),
    maxPlayers: +(maxplayers[0].$.value),
    // Fill in bestWith & recommendedWith later
    bestWith: null,
    recommendedWith: null,
    playTime: +(playingtime[0].$.value),
    minPlayTime: +(minplaytime[0].$.value),
    maxPlayTime: +(maxplaytime[0].$.value),
    minAge: +(minage[0].$.value),
    // Fill in categories & mechanics later
    categories: [],
    mechanics: [],
  };

  // If there are any poll results with additional info, they'll be in this array
  const pollSummaryArray = convertedData.items.item[0]['poll-summary'][0].result;

  // If it is an array, iterate through it and update the key for either best or rec
  if (Array.isArray(pollSummaryArray)) {
    pollSummaryArray.forEach((category) => {
      if (category.$.value.slice(0, 4) === 'Best') {
        bggObj.bestWith = category.$.value;
      } else if (category.$.value.slice(0, 3) === 'Rec') {
        bggObj.recommendedWith = category.$.value;
      }
    });
  }

  // If there are any link results with additional info, they'll be in this array
  const linksArray = convertedData.items.item[0].link;

  // If it is an array, iterate through it and update the array for either categories or mechanics
  if (Array.isArray(linksArray)) {
    linksArray.forEach((link) => {
      if (link.$.type === 'boardgamecategory') {
        bggObj.categories.push(link.$.value);
      } else if (link.$.type === 'boardgamemechanic') {
        bggObj.mechanics.push(link.$.value);
      }
    });
  }

  // Return the object
  return bggObj;
};

/*
Retrieves and build game object from Board Game Geek (async)
*/
const getGameInfoByID = async (id) => {
  // Store object returned after awaiting
  const gameInfo = await axios.get(`https://boardgamegeek.com/xmlapi2/thing?id=${id}`)
    // Destructure response from BGG to grab XML from the data key
    // convertXML returns a promise; implicit return to the next .then()
    .then(({ data }) => convertXML(data))
    .then((result) => {
      const gameInfoObj = buildGameObj(result);
      return gameInfoObj;
    })
    .catch((err) => {
      console.error('BGG HELPER ERROR:', err);
    });
  // Return the gameInfoObj to be used by getGameInfoBGG helper
  return gameInfo;
};

const buildGamesArray = (convertedData) => (
  // Build an array of game objects from the data returned from BGG
  convertedData.items.item.map((game) => (
    {
      id: +(game.$.id),
      type: game.$.type,
      name: game.name ? game.name[0].$.value : null,
      yearPublished: game.yearpublished ? game.yearpublished[0].$.value : null,
    }
  ))
);

const getGameInfoBGG = async (title) => {
  // Store the returned gameInfo after awaiting
  const gameInfoObj = await axios.get(`https://boardgamegeek.com/xmlapi2/search?query="${title}"`)
    .then(({ data }) => convertXML(data))
    .then(async (result) => {
      // If no results are found, exit the function by returning null.
      if (!result) {
        return null;
      }
      // Build games array
      const gamesArray = buildGamesArray(result);
      // Reduce the games array down to an exact or close match
      const possibleMatch = gamesArray.reduce((acc, curr) => {
        // Exact Match
        if (curr.name.toLowerCase() === title.toLowerCase()) {
          return curr;
        }

        // If it's not exact, check which length is close to the title length
        const accTitleLengthDiff = Math.abs(acc.name.length - title.length);
        const currTitleLengthDiff = Math.abs(curr.name.length - title.length);
        if (currTitleLengthDiff < accTitleLengthDiff) {
          // If it's closer in length, return the curr
          return curr;
        }
        return acc;
      });
      // If the exact game isn't found, return a close match
      if (!(possibleMatch.name.toLowerCase() === title.toLowerCase())) {
        // Add a closeMatch property set to true
        possibleMatch.closeMatch = true;
        return possibleMatch;
      }
      // If the exact name is found, fetch the data from BGG and return it.
      const gameInfo = await getGameInfoByID(possibleMatch.id);
      return gameInfo;
    })
    .catch((err) => {
      console.error('BGG HELPER ERROR:', err);
    });
  // Return the gameInfoObj to be used by server
  return gameInfoObj;
};

module.exports = {
  getGameInfoBGG, // Main search function for BGG, can be used with async/await
};
