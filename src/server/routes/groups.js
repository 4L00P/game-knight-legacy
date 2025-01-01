const { Router } = require('express');
const { Groups } = require('../database');
const { GameNights } = require('../database');

const groupsRouter = Router();

// End point starts with '/api/groups'

/**
 * Set a post request for starting an empty group
 */
Router.get();

  module.exports = {
    groupsRouter,
  };
// });
