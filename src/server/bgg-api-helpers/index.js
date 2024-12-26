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
 * E: May not have certain keys such as bestWith & recommendedWith
 */
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

    // // May need to drop this --- vvvv
    // bestWith: (
    //   !(convertedData['poll-summary']) ? null :
    //   !(convertedData['poll-summary'][0].result) ? null :
    //   convertedData['poll-summary'][0].result[0].$.value
    // ),
    // recommendedWith: (
    //   !(convertedData['poll-summary']) ? null :
    //   !(convertedData['poll-summary'][0].result) ? null :
    //   convertedData['poll-summary'][0].result[1].$.value
    // ),
    // // May need to drop this --- ^^^^

    playingTime: +(playingtime[0].$.value),
    minPlayTime: +(minplaytime[0].$.value),
    maxPlayTime: +(maxplaytime[0].$.value),
    minimumAge: +(minage[0].$.value),
  };

  // Return the object
  return bggObj;
};

module.exports = {
  convertXML,
  buildGameObj,
};
