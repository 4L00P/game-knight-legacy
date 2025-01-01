const { Router } = require('express');
const passport = require('passport');
require('./auth-passport');

const authRouter = Router();

/*
GET /auth => Used to serve the client a Google Login page
  - Grabs email and profile from Google info on success login
  - Needs to served with href="/auth" for client to be redirected to Google Login
*/
authRouter.get('/', passport.authenticate('google', {
  scope: ['email', 'profile'],
}));

/*
GET /auth/callback => Used to catch Google's response from login
  - Needs to be set up in the Google Strategy for passport.js
  - Need to authorize /auth/callback redirect URI in OAuth token
  - Redirect to the proper route on success or failure
*/
authRouter.get('/callback', passport.authenticate('google', {
  successRedirect: '/auth/success',
  failureRedirect: '/auth/failure',
}));

/*
GET /auth/success => On a successful login with Google, check for a user on request"
  - If there is no user, redirect to /auth/failure
  - If there is a user, redirect to /home for client to start using app
*/
authRouter.get('/success', (req, res) => {
  if (!req.user) {
    res.redirect('/auth/failure');
  } else {
    res.redirect('/home');
  }
});

/*
GET /auth/failure => On a failed login with Google, send the user back to the landing page
*/
authRouter.get('/failure', (req, res) => {
  res.redirect('/');
});

module.exports = {
  authRouter,
};
