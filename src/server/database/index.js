const { connect } = require('mongoose');
const { Users } = require('./models/Users');
const { Games } = require('./models/Games');
const { Groups } = require('./models/Groups');
const { GameNights } = require('./models/GameNights');

connect('mongodb://127.0.0.1:27017/game-knight')
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

module.exports = {
  Users,
  Games,
  Groups,
  GameNights,
};
