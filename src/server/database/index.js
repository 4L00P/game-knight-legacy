const { connect } = require('mongoose');

connect('mongodb://127.0.0.1:27017/game-knight')
  .then(() => {
    console.log('Connected to Database')
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });
