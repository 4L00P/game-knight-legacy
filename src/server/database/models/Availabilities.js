const mongoose = require('mongoose');
const moment = require('moment');

const AvailabilitySchema = {
  // user has a 'name' that is linked to google
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: String },
  timeStart: { type: Number },
  timeEnd: { type: Number },
  duration: { type: Number },
};

const Availabilities = mongoose.model('Availability', new mongoose.Schema(AvailabilitySchema));

module.exports = {
  Availabilities,
};
