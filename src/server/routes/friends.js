const { Router } = require('express');
const { Users } = require('../database');

const friendsRouter = Router();

// CRUD OPERATIONS - interacts with Mongoose models //

// Note: end point (set in app.js) is '/api/friends'

// user can see all friends added
friendsRouter.get('/', (req, res) => {
  // res.send('hello');
  Users.find({})
    .then((user) => {
      console.log('GET all users from db:', user);

      res.status(200).send(user);
    })
    .catch((err) => {
      console.error('failed to GET users from db', err);
    });
});

// user can add friend to list
friendsRouter.post('/', (req, res) => {
  // Users.findById()
  //   .then((user) => {
  //     console.log('GET all users from db:', user);

  //     res.status(200).send(user);
  //   })
  //   .catch((err) => {
  //     console.error('failed to GET users from db', err);
  //   });

});

friendsRouter.delete('/', (req, res) => {
  // user can delete a friend from the list
});

friendsRouter.patch('/', (req, res) => {
  // user can check if a friend request is pending.
});

module.exports = {
  friendsRouter,
};
