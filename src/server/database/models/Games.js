const mongoose = require('mongoose');

const GameSchema = {
  name: { type: String, required: true },
  description: { type: String },
  year: { type: Number },
  minPlayers: { type: Number },
  maxPlayers: { type: Number },
  playTime: { type: Number },
  minAge: { type: Number },
};

const Games = mongoose.model('Game', new mongoose.Schema(GameSchema));

module.exports = {
  Games,
};
