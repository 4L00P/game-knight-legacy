const path = require('path');
const express = require('express');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const authRoutes = require('./routes/authRoutes');
const passport = require('passport');
const passportSetup = require('./routes/passport.js')

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;


const app = express();

const DIST_DIR = path.resolve(__dirname, '..', '..', 'dist');
app.use((req, res, next) => {
  res.header('Access-Control-Allow_origin', '*');// wanna change this to google if it works.
  // Make app middlewear that adds the appropriate header to each CORS request to say it's okay
  next();
});

app.use(express.static(DIST_DIR));

app.use('/auth', authRoutes);
//  set up possible view engine.
app.set('view engine', 'ejs');

/**
 * If React-Router sends a request for a particular webpage, send the index.html in response
 */



app.get('/login/google', passport.authenticate('google'));

app.get('/redirect/google', passport.authenticate('google', {
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
