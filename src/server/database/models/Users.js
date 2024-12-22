const mongoose = require('mongoose');

const UserSchema = {
  name: { type: String, required: true },
  googleId: { type: String, required: true },
  email: { type: String },
};

const Users = mongoose.model('User', new mongoose.Schema(UserSchema));

module.exports = {
  Users,
};
