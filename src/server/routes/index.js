const { authRouter } = require('./auth');
const { gamesRouter } = require('./games');
const { groupsRouter } = require('./groups');
const { gameNightsRouter } = require('./gamenights');
const { availabilitiesRouter } = require('./availabilities');
const { usersRouter } = require('./users');
const { pendingFriendsRouter } = require('./pending');

module.exports = {
  authRouter,
  gamesRouter,
  groupsRouter,
  gameNightsRouter,
  availabilitiesRouter,
  usersRouter,
  pendingFriendsRouter,
};
