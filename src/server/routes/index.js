const { authRouter } = require('./auth');
const { gamesRouter } = require('./games');
const { groupsRouter } = require('./groups');
const { gameNightsRouter } = require('./gamenights');

module.exports = {
  authRouter,
  gamesRouter,
  groupsRouter,
  gameNightsRouter,
};
