const { Router } = require('express');
const { Groups } = require('../database');
const { GameNights } = require('../database');

const groupsRouter = Router();

// End point starts with '/api/groups'
// groupsRouter.get('/')
// groupsRouter.post('/', async (req, res) => {
//   // if no games match today's date
//   // respond with a 404
//   // if more than one game has todays date, and haven't been played already or cancelled
//   // pick between the candidates
//   // if one game matches today's date, and hasn't been played already or cancelled
//   let gameNight = await GameNights.find({ date: '12/30/24', isCancelled: false, isComplete: false })
//   // so we'll only ever have one Current Game created at a time
//   // destructure game.
//   const {
//     name,
//     user,
//     date,
//     guests,
//   } = gameNight;
//     // create a new Group holding that info
//   Groups.create({
//     name,
//     user,
//     date,
//     members: guests,
//     currentGame: gameNight,
//   }).then(() => {
//     res.sendStatus(201);
//   })
//     .catch((err) => {
//       console.log('Unable to locate Game Night', err);
//       res.sendStatus(500);
    // });

  module.exports = {
    groupsRouter,
  };
// });
