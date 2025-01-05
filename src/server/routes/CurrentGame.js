const { Router } = require('express');
const { Groups } = require('../database');

const currentGameRouter = Router();

// End point starts with '/api/current-game'

currentGameRouter.get('/', (req, res) => {
  // find all the groups where the user listed is the user connected to this session...
  // req.user refers to the entire user object, and that user is the one we're looking to match, so
  // find all groups where the user matches us. Use ._id, as req.user refers to the entire object
  Groups.find({ user: req.user._id })
    .then((info) => {
      res.status(200).send(info);
    })
    .catch((err) => {
      console.error('Could not Get Groups', err);
      res.sendStatus(500);
    });
});

module.exports {
  currentGameRouter
}