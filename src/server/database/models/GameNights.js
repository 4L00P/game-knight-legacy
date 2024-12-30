const mongoose = require('mongoose');

const GameNightSchema = {
  name: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true },
  isComplete: { type: Boolean, default: false },
  isCancelled: { type: Boolean, default: false },
  guests: { type: [String] },
  snacks: { type: [String] },
  games: [{ type: String }],
  winner: { type: String, default: '' },
};

const GameNights = mongoose.model('GameNight', new mongoose.Schema(GameNightSchema));

module.exports = {
  GameNights,
};
