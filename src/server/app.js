const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
// Builds passport for Google OAuth2.0 Authentication
require('./routes/auth-passport');

const {
  authRouter,
  gamesRouter,
  groupsRouter,
  gameNightsRouter,
} = require('./routes');

// Pull variables from .env file
const { SESSION_SECRET } = process.env;

const app = express();

// Path to /dist directory
const DIST_DIR = path.resolve(__dirname, '..', '..', 'dist');

app.use(express.static(DIST_DIR));
app.use(express.json());

// Session
app.use(session({
  // Name of the cookie:
  name: 'google-auth-session',
  // Complicated string, store in .env
  secret: SESSION_SECRET,
  /*
    Forces the session to be saved back to the session store:
    Cookie has an expiration time of one hour, so we'll need to re-save
    while the client is using the site to keep the cookie from expiring.
  */
  resave: true,
  /*
    Forces a session that is "uninitialized" to be saved to the store.
    "uninitialized" => New, but not modified
    Choosing false is useful for:
      - Implementing login sessions
      - Reducing server storage usage
      - Complying with laws that require permission before setting a cookie
      - Helps with race conditions where a client makes multiple parallel requests without a session
  */
  saveUninitialized: false,
  // Cookie settings
  cookie: {
    // The cookie will last one hour from when it is created/re-saved
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

/*
GET /logout => Logout the session, destroy the session, clear cookie, redirect to landing page
  - Client should be served /logout with href="/logout" for this to work.
*/
app.get('/logout', (req, res) => {
  /*
    Logout of the current session
  */
  req.logout((err) => {
    if (err) {
      console.error('Failed to logout:', err);
      res.sendStatus(500);
    } else {
      /*
        Destroy the session
      */
      req.session.destroy((error) => {
        if (error) {
          console.error('Error destroying session:', error);
          res.sendStatus(500);
        } else {
          /*
            Clear the cookie
          */
          res.clearCookie('google-auth-session');
          /*
           Redirect to landing page
          */
          res.redirect('/');
        }
      });
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
