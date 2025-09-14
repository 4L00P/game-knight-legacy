const { Router } = require('express');
// import mongoose model
const { Availabilities } = require('../database');

// Create the express Router
const availabilitiesRouter = Router();

// CRUD OPERATIONS - interacts with Mongoose models
// Note: end point (set in app.js) is '/api/availabilities'

availabilitiesRouter.get('/', (req, res) => {
  // user can see all the availabilities they entered
  Availabilities.find({})
    .then((times) => {
      // send 200 ok status and the times as json
      res.status(200).json(times);
    })
    .catch((err) => {
      console.log('failed to GET availabilities from db', err);
    });
});

availabilitiesRouter.post('/', (req, res) => {
  // destructure req object
  const {
    user,
    date,
    timeStart,
    timeEnd,
  } = req.body.scheduling;

  // create an availability in the db
  Availabilities.create({
    user, date, timeStart, timeEnd,
  })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('failed to POST availability to the db', err);
    });
});

availabilitiesRouter.delete('/', (req, res) => {
  // destructure request object
  const { date } = req.body.scheduling;
  // user deletes an availability by date
  Availabilities.deleteOne({ date })
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log('failed to DELETE availability', err);
    });
});

availabilitiesRouter.patch('/:id', (req, res) => {
  // destructure request obj
  const { id } = req.params;
  const { scheduling } = req.body;
  // change the availability to whichever day/start/end time user wants
  Availabilities.findByIdAndUpdate(id, scheduling)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('failed to PATCH availability', err);
    });
});

// Export the router
module.exports = {
  availabilitiesRouter,
};
