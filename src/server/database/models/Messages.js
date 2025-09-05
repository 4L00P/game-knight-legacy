const mongoose = require('mongoose');
const moment = require('moment');

const MessageSchema = {
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sentAt: { type: 'String' },
  room: { type: 'String', required: true },
  text: {type: 'String', required: true }
};

const Messages = mongoose.model(MessageSchema);

export default Messages;