const { Router } = require('express');
const { Pending } = require('../database');

const pendingFriendsRouter = Router();

pendingFriendsRouter.get('/:requester:recipient', (req, res) => {
  // user can check if a friend request is pending.
  let { requester, recipient } = req.params;
  requester = requester.slice(1);
  recipient = recipient.slice(1);

  Pending.find({
    email: search,
  }).then((user) => {
    console.log('GET all users from db:', user);
    res.status(200).json(user);
  }).catch((err) => {
    console.error('failed to GET users from db', err);
  });

});

module.exports = {
  pendingFriendsRouter,
};
