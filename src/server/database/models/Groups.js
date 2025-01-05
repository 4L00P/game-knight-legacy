const mongoose = require('mongoose');

const GroupSchema = {
  name: { type: String, required: true, default: 'Game Night!!' },
  players: [{ type: String }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
};

const Groups = mongoose.model('Group', new mongoose.Schema(GroupSchema));

module.exports = {
  Groups,
};
