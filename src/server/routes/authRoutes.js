const express = require ('express');
const router = require('express').Router();
const app = express();

// //login?
app.get('/login', (req, res) => {
  res.render('login');
});
// logout
router.get('/logout', (req, res) => {
  //handle with passport
  res.send('loggin out');
});
// auth with google
router.get('/google', (req, res) => {
  //  also handle with passport
  res.send('logging in w/google');
});
module.exports = router;
