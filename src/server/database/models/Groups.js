const mongoose = require('mongoose');

const GroupSchema = {
  name: { type: String, required: true, default: 'Game Night!!' },
  // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  players: [{ type: String }],
  game: { type: String },
};

const Groups = mongoose.model('Group', new mongoose.Schema(GroupSchema));

module.exports = {
  Groups,
};
