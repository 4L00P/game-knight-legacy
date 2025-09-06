const { Router } = require('express');
// import mongoose model
const { Availabilities } = require('../database');

// Create the express Router
const availabilitiesRouter = Router();

// CRUD OPERATIONS - interacts with Mongoose models //

// Note: end point (set in app.js) is '/api/availabilities'

availabilitiesRouter.get('/', (req, res) => {
  // user can see all the availabilities they entered
  // limit to 1 week
  Availabilities.find({})
    .then((times) => {
      console.log('GET times from db:', times);

      res.status(200).send(times);
    })
    .catch((err) => {
      console.log('failed to GET availabilities from db', err);
    });
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
