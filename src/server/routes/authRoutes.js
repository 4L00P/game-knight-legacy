const express = require ('express');
const passport = require('passport');
const router = require('express').Router();

const app = express();
// //login?
// router.get('/login', (req, res) => {
//   res.render('login');
// });
// logout
router.get('/logout', (req, res) => {
  //handle with passport
  res.send('loggin out');
});
// auth with google
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));
module.exports = router;
