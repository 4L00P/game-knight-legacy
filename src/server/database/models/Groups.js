const mongoose = require('mongoose');

const GroupSchema = {
  name: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  members: [{ type: String }],
};

const Groups = mongoose.model('Group', new mongoose.Schema(GroupSchema));

module.exports = {
  Groups,
};
