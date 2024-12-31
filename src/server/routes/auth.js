const { Router } = require('express');
const passport = require('passport');
require('./auth-passport');

const authRouter = Router();

authRouter.get('/', passport.authenticate('google', {
  scope: ['email', 'profile'],
}));

authRouter.get('/callback', passport.authenticate('google', {
  successRedirect: 'auth/success',
  failureRedirect: 'auth/failure',
}));

// Success
authRouter.get('/success', (req, res) => {
  if (!req.user) {
    res.redirect('/auth/failure');
  } else {
    res.redirect('/home');
  }
});

// Failure
authRouter.get('/failure', (req, res) => {
  res.redirect('/');
});

module.exports = {
  authRouter,
};
