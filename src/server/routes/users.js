const { Router } = require('express');
const { Users } = require('../database');

const usersRouter = Router();

// CRUD OPERATIONS - interacts with Mongoose models //

// Note: end point (set in app.js) is '/api/friends'

// user can see all friends added
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

// user can add friend to list
usersRouter.post('/', (req, res) => {
  // Users.findOneAndUpdate({})
  //   .then((user) => {
  //     console.log('GET all users from db:', user);

  //     res.status(200).send(user);
  //   })
  //   .catch((err) => {
  //     console.error('failed to GET users from db', err);
  //   });
});

usersRouter.delete('/', (req, res) => {
  // user can delete a friend from the list
});

usersRouter.patch('/', (req, res) => {
  // user can check if a friend request is pending.
});

module.exports = {
  usersRouter,
};
