const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./routes/auth-passport');

const {
  authRouter,
  gamesRouter,
  groupsRouter,
  gameNightsRouter,
} = require('./routes');

const { SESSION_SECRET } = process.env;

const app = express();

const DIST_DIR = path.resolve(__dirname, '..', '..', 'dist');

app.use(express.static(DIST_DIR));
app.use(express.json());

// Session
app.use(session({
  name: 'google-auth-session',
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    // The cookie will last one hour.
    maxAge: 60000 * 60,
  },
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Routers
app.use('/auth', authRouter);
app.use('/api/games', gamesRouter);
app.use('/api/groups', groupsRouter);
app.use('/api/game-nights', gameNightsRouter);

app.get('/logout', (req, res) => {
  // req.logout();
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.sendStatus(500);
    } else {
      res.clearCookie('google-auth-session');
      res.redirect('/');
    }
  });
});

/**
 * If React-Router sends a request for a particular webpage, send the index.html in response
 */
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: DIST_DIR });
});

module.exports = {
  app,
};
