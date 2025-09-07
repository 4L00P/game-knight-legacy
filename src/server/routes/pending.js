const { Router } = require('express');
const { Pending } = require('../database');

const pendingFriendsRouter = Router();

pendingFriendsRouter.get('/', (req, res) => {
  // user can check if a friend request is pending.

});

module.exports = {
  pendingFriendsRouter,
};
