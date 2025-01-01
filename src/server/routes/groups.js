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

/**
 * Set a patch request to amend new groups schema
 */
groupsRouter.patch('/', (req, res) => {
  const info = req.body;
  
});
  module.exports = {
    groupsRouter,
  };
// });
