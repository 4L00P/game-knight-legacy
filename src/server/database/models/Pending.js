const mongoose = require('mongoose');

const PendingSchema = new mongoose.Schema({
  requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Pending = mongoose.model('Pending', new mongoose.Schema(PendingSchema));

module.exports = {
  Pending,
};
