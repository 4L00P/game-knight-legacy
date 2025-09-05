const { Router } = require('express');
const { Users } = require('../database');

const friendsRouter = Router();

// CRUD OPERATIONS - interacts with Mongoose models //

// Note: end point (set in app.js) is '/api/friends'

friendsRouter.get('/', (req, res) => {
// user can see all the availabilities they entered
// limit to 1 week?
});

friendsRouter.post('/', (req, res) => {
// user can add an availability
});

friendsRouter.delete('/', (req, res) => {
// user can delete an availability
});

friendsRouter.patch('/', (req, res) => {
// change the availability to whichever day/start/end time user wants
});

module.exports = {
  friendsRouter,
};
