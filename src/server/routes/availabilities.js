const { Router } = require('express');
// import mongoose model
const { Availabilites } = require('../database');

// Create the express Router
const availabilitiesRouter = Router();

// CRUD OPERATIONS - interacts with Mongoose models //

// Note: end point (set in app.js) is '/api/availabilities'

availabilitiesRouter.get('/', (req, res) => {
// user can see all the availabilities they entered
// limit to 1 week?
});

availabilitiesRouter.post('/', (req, res) => {
// user can add an availability
});

availabilitiesRouter.delete('/', (req, res) => {
// user can delete an availability
});

availabilitiesRouter.patch('/', (req, res) => {
// change the availability to whichever day/start/end time user wants
});

// Export the router
module.exports = {
  availabilitiesRouter,
};
