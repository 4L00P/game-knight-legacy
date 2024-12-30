const { Router } = require('express');
const { getGameInfoBGG } = require('../bgg-api-helpers');
const { Games } = require('../database');

const gamesRouter = Router();

// End point starts with '/api/games'

/*
POST '/api/games => Sends request to BGG for info on board game name in req body
=> Stores game info in Database
*/
gamesRouter.post('/', async (req, res) => {
  // Grab game object from request's body
  const { game } = req.body;
  // Fetch game data from BGG
  const gameInfo = await getGameInfoBGG(game.name);
  // If nothing is returned from BGG
  if (!gameInfo) {
    // Send status 404
    res.sendStatus(404);
  } else {
    // Destructure gameInfo
    const {
      name,
      thumbnail,
      image,
      description,
      yearPublished,
      minPlayers,
      maxPlayers,
      playTime,
      minAge,
    } = gameInfo;
    // Query database to create a new game object with the game Info
    Games.create({
      name,
      thumbnail,
      image,
      description,
      yearPublished,
      minPlayers,
      maxPlayers,
      playTime,
      minAge,
    })
      // On success, send Status: 201
      .then(() => {
        res.sendStatus(201);
      })
      // On failure, log error and send Status: 500
      .catch((err) => {
        console.error('Failed to create new game object:', err);
        res.sendStatus(500);
      });
  }
});

/*
GET /api/games => Retrieve all games stored in DB
*/
gamesRouter.get('/', (req, res) => {
  // Query the database for all games
  Games.find({}).sort({ name: 'asc' })
    // Success, set Status: 200 & send array of games
    .then((gamesArr) => {
      res.status(200);
      res.send(gamesArr);
    })
    // Failure, log error & send Status: 500
    .catch((err) => {
      console.error('Failed to find all games in DB:', err);
      res.sendStatus(500);
    });
});

module.exports = {
  gamesRouter,
};
