const { Router } = require('express');
const { Users } = require('../database');

const usersRouter = Router();

// CRUD OPERATIONS - interacts with Mongoose models //

// Note: end point (set in app.js) is '/api/friends'

// user can search for all friends by email
usersRouter.get('/:search', (req, res) => {
  let { search } = req.params;
  // this removes the colon.
  search = search.slice(1);

  Users.find({
    email: search,
  }).then((user) => {
    console.log('GET all users from db:', user);
    res.status(200).json(user);
  }).catch((err) => {
    console.error('failed to GET users from db', err);
  });
});

// user can add friend by email or name
usersRouter.post('/', (req, res) => {

});

// user can delete a friends by email or name
usersRouter.delete('/', (req, res) => {
});

// user can check if a friend request is pending.
usersRouter.patch('/', (req, res) => {
});

module.exports = {
  usersRouter,
};
