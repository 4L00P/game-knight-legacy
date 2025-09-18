const { Router } = require('express');
const { Users } = require('../database');

const usersRouter = Router();

// CRUD OPERATIONS - interacts with Mongoose models //

// Note: end point (set in app.js) is '/api/friends'

// user can search for all friends by email
usersRouter.get('/:search', (req, res) => {
  // grab the search param from the url
  let { search } = req.params;
  // this removes the colon.
  search = search.slice(1);
  // .find is a mongoose method to query the mongodb, sends matching users back to client
  Users.find({
    email: search,
  }).then((user) => {
    console.log('GET all users from db:', user);
    res.status(200).json(user);
  }).catch((err) => {
    console.error('failed to GET users from db', err);
  });
});

// user can add friend by email to current user(/addFriend is endpoint)
usersRouter.post('/addFriend', (req, res) => {
  // route receives recipent and reciever
  const { userEmail, friendEmail } = req.body;
  // use findOne to find current user by email
  Users.findOne({ email: userEmail })
    .then((user) => {
      // use findOne to find current friend by email
      Users.findOne({ email: friendEmail })
        .then((friend) => {
          // use promise.all and saves both documents to database
          Promise.all([user.save(), friend.save()])
            .then(() => { // promise resolved successfully
              res.status(200).json({ message: 'Friend added successfully' });
            })
            .catch((saveErr) => { // one of promises fails
              console.error('Error saving users:', saveErr);
              res.status(500).json({ error: 'Error saving users' });
            });
        })
        .catch((err) => {
          console.error('Error finding friend:', err);
          res.status(500).json({ error: 'Error finding friend' });
        });
    })
    .catch((err) => {
      console.error('Error finding user:', err);
      res.status(500).json({ error: 'Error finding user' });
    });
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
