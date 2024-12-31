const path = require('path');
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const {
  authRouter,
  gamesRouter,
  groupsRouter,
  gameNightsRouter,
} = require('./routes');

const app = express();

const DIST_DIR = path.resolve(__dirname, '..', '..', 'dist');

app.use(express.static(DIST_DIR));
app.use(express.json());

// Routers
app.use('/auth', authRouter);
app.use('/api/games', gamesRouter);
app.use('/api/groups', groupsRouter);
app.use('/api/game-nights', gameNightsRouter);

/**
 * If React-Router sends a request for a particular webpage, send the index.html in response
 */

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: DIST_DIR });
});

module.exports = {
  app,
};
