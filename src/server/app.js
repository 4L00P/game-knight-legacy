const path = require('path');
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// Added cors to dependency to use the library in fixing
const cors = require('cors');
const { gamesRouter } = require('./routes/games');
const { groupsRouter } = require('./routes/groups');
const { gameNightsRouter } = require('./routes/gamenights');

const app = express();

const DIST_DIR = path.resolve(__dirname, '..', '..', 'dist');

app.use(express.static(DIST_DIR));
app.use(express.json());

// Routers
app.use('/api/games', gamesRouter);
app.use('/api/groups', groupsRouter);
app.use('/api/game-nights', gameNightsRouter);
// set all cors options below for facility. Whenever needed, simply write "cors(corsOptions)"
const corsOptions = {
  origin: 'http://localhost:8000/login',
  optionsSuccessStatus: 200,
};
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

passport.use(new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/redirect/google',
    scope: ['profile', 'email'],
  },
  (accessToken, refreshToken, profile, cb) => {
    console.log('Access Token:', accessToken);
    console.log('Refresh:', refreshToken);
    console.log('Profile:', profile);
  },
));

/**
 * If React-Router sends a request for a particular webpage, send the index.html in response
 */

app.get('/login/google', cors(corsOptions), passport.authenticate('google'));

app.get('/redirect/google', passport.authenticate('google', {
  // looks like an issue here is that after the info is sent from the auth page, our redirect
  // doesn't seem to actually have a path back to the route. May be a middleware issue, but
  // I'm just writing it down for later
  successRedirect: '/',
  failureRedirect: 'login',
}), (req, res) => {
  res.redirect('/');
});

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: DIST_DIR });
});

module.exports = {
  app,
};
