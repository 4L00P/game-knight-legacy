const { Router } = require('express');
const { getGameInfoBGG, getGameInfoByID } = require('../bgg-api-helpers');
const { Games } = require('../database');

const gamesRouter = Router();

// End point starts with '/api/games'

/*
POST '/api/games => Sends request to BGG for info on board game name in req body
=> Stores game info in Database
*/
gamesRouter.post('/', async (req, res) => {
  // Grab _id from request's user object
  const { _id } = req.user;
  // Grab game object from request's body
  const { game } = req.body;
  // If neither a name or a bggId are on the game object
  if (!(game.name || game.bggId)) {
    // Send Status: 404
    res.sendStatus(404);
  } else {
    const gameInfo = game.name
      // If name is supplied, find by name
      ? await getGameInfoBGG(game.name)
      // If bggId is supplied, find by ID
      : await getGameInfoByID(game.bggId);
    // If nothing is returned from BGG
    if (!gameInfo) {
      // Send status 200 & null for an empty response to user
      res.status(200);
      res.send(null);
    // If it's a close match
    } else if (gameInfo.closeMatch) {
      // Send status 200 & the info for the closeMatch
      res.status(200);
      res.send(gameInfo);
    } else {
      // Destructure gameInfo
      const {
        bggId,
        name,
        thumbnail,
        image,
        description,
        yearPublished,
        minPlayers,
        maxPlayers,
        bestWith,
        recommendedWith,
        playTime,
        minAge,
        categories,
        mechanics,
      } = gameInfo;
      // Query database to create a new game object with the game Info
      Games.create({
        bggId,
        name,
        thumbnail,
        image,
        description,
        yearPublished,
        minPlayers,
        maxPlayers,
        bestWith,
        recommendedWith,
        playTime,
        minAge,
        categories,
        mechanics,
        // Saves user's id to Game object for filtered look up later
        user: _id,
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
  }
});

/*
GET /api/games => Retrieve all games stored in DB
*/
gamesRouter.get('/', (req, res) => {
  // Grab the _id from the request's user object
  const { _id } = req.user;
  // Create find queryFilter object
  const queryFilter = { user: _id };
  // Grab the game object from the request's query
  const { game } = req.query;
  // Check if you get an object for game
  if (game) {
    // Iterate through the keys on the game object
    Object.keys(game).forEach((key) => {
      if (Array.isArray(game[key])) {
        queryFilter[key] = { $in: game[key] };
      } else {
        queryFilter[key] = game[key];
      }
    });
  }
  // Query the database for all games
  Games.find(queryFilter).sort({ name: 'asc' })
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

/*
DELETE /api/games/:id => Removes game using _id from the Database
*/
gamesRouter.delete('/:id', (req, res) => {
  // Grab the id from the request's path parameters
  const { id } = req.params;
  // Query the DB find the game by id and delete it
  Games.findByIdAndDelete(id)
    // Success
    .then((removedGame) => {
      // If no game is found, send Status: 404
      if (!removedGame) {
        res.sendStatus(404);
      // If a game is removed, send Status: 200
      } else {
        res.sendStatus(200);
      }
    })
    // Failure, log error and send Status: 500
    .catch((err) => {
      console.error('Failed to findByIdAndDelete:', err);
      res.sendStatus(500);
    });
});

/*
PATCH /api/games/:id => Updates game by _id using the object in the request's body
*/
gamesRouter.patch('/:id', (req, res) => {
  // Grab the game object from the request's body
  const { game } = req.body;
  // Grab the id from the request's path parameters
  const { id } = req.params;
  // Query the DB to update the game with the id using the game object
  Games.findByIdAndUpdate(id, game)
    .then((updatedGame) => {
      // If no game is found, send Status: 404
      if (!updatedGame) {
        res.sendStatus(404);
      // If a game is updated, send Status: 200
      } else {
        res.sendStatus(200);
      }
    })
    // Failure, log error & send Status: 500
    .catch((err) => {
      console.error('Failed to findByIdAndUpdate:', err);
      res.sendStatus(500);
    });
});

module.exports = {
  gamesRouter,
};
