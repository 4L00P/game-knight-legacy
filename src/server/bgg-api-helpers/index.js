const { parseString } = require('xml2js');
const axios = require('axios'); // For making a request to BGG API
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
  const bggObj = {
    id: +($.id),
    type: $.type,
    thumbnail: thumbnail[0],
    image: image[0],
    name: name[0].$.value,
    description: description[0],
    yearPublished: +(yearpublished[0].$.value),
    minPlayers: +(minplayers[0].$.value),
    maxPlayers: +(maxplayers[0].$.value),
    playingTime: +(playingtime[0].$.value),
    minPlayTime: +(minplaytime[0].$.value),
    maxPlayTime: +(maxplaytime[0].$.value),
    minimumAge: +(minage[0].$.value),
  };

  // If there are any poll results with additional info, they'll be in this array
  const pollSummaryArray = convertedData.items.item[0]['poll-summary'][0].result;

  // If it is an array, iterate through it and create a key for each category
  if (Array.isArray(pollSummaryArray)) {
    pollSummaryArray.forEach((category) => {
      bggObj[category.$.name] = category.$.value;
    });
  }

  // Return the object
  return bggObj;
};

/*
Retrieves and build game object from Board Game Geek (async)
*/
const getGameInfoByID = async (id) => {
  const gameInfo = await axios.get(`https://boardgamegeek.com/xmlapi2/thing?id=${id}`)
    // Destructure response from BGG to grab XML from the data key
    // convertXML returns a promise; implicit return to the next .then()
    .then(({ data }) => convertXML(data))
    .then((result) => {
      const gameInfoObj = buildGameObj(result);
      return gameInfoObj;
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  return gameInfo;
};

const buildGamesArray = (convertedData) => (
  // Build an array of game objects from the data returned from BGG
  convertedData.items.item.map((game) => (
    {
      id: +(game.$.id),
      type: game.$.type,
      name: game.name ? game.name[0].$.value : null,
      yearPublished: game.yearpublished ? game.yearpublished[0].$.value : null
    }
  ))
);

const getGameInfoBGG = async (title) => {
  const gameInfoObj = await axios.get(`https://boardgamegeek.com/xmlapi2/search?query="${title}"`)
    .then(({ data }) => convertXML(data))
    .then(async (result) => {
      // If no results are found, exit the function.
      if (!result) {
        return;
      }
      // Build games array
      const gamesArray = buildGamesArray(result);
      // Find the board game with the exact title.
      const exactGame = gamesArray.filter((game) => (
        game.name.toLowerCase() === title.toLowerCase()
      ))[0];
      // If the exact game isn't found, do nothing
      if (!exactGame) {
        return;
      }
      // If the exact name is found, fetch the data from BGG.
      const gameInfo = await getGameInfoByID(exactGame.id);
      return gameInfo;
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  return gameInfoObj;
};

// Testing getGameInfoByID
const test = async () => {
  const game = await getGameInfoBGG('EL: The Chicago Transit Adventure'); // Expect info about EL: The Chicago Transit Adventure
  console.log(game);
};

test();

module.exports = {
  getGameInfoBGG, // Main search function for BGG, can be used with async/await
};
