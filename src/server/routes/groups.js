const { Router } = require('express');
const { Groups } = require('../database');
const { GameNights } = require('../database');

const groupsRouter = Router();

// End point starts with '/api/groups'

/**
 * Set a post request for starting an empty group
 */
groupsRouter.post('/', (req, res) => {
  // the way we decided this, the request body should be blank, so no info to hold
  // just create an empty Groups schema to hold the group
  Groups.create().then(() => {
    // send a success response 201
    res.status(201).send('Successfully created group');
  }).catch((err) => {
    // if caught, log that there's an issue, and what the issue is
    console.error('Could Not Post Group', err);
    // and add a response 500
    res.sendStatus(500);
  });
});
groupsRouter.get('/', (req, res) => {
  Groups.find({})
    .then((info) => {
      res.status(200).send('GET request successful');
    })
    .catch((err) => {
      console.error('Could not Get Groups', err);
      res.sendStatus(500);
    });
});

/**
 * Set a patch request to amend new group name
 */
groupsRouter.patch('/:id', (req, res) => {
  const newName = req.body;
});


/**
 * Set a patch request to add to players
 */

/**
 * Set a patch request to add to games(opt. maybe part of old plan)
 */
  module.exports = {
    groupsRouter,
  };
