const { Router } = require('express');
const { GameNights } = require('../database');

const gameNightsRouter = Router();

// End point starts with '/api/game-nights'
// gameNightsRouter.get('/')

gameNightsRouter.post('/', (req, res) => {
  // Grab the request body
  const { gameNight } = req.body;
  console.log(gameNight);
  // Add the new gamenight to the database
  GameNights.create(gameNight).then((event) => {
    // Send back the proper status codes
    res.status(201).send(event);
  }).catch((err) => {
    console.error('Error adding game night to database: ', err);
    res.sendStatus(500);
  });
});
module.exports = {
  gameNightsRouter,
};
