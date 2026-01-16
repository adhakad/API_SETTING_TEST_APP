const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  terminalSn: { type: String, required: true, unique: true },
  model: String,
  vendor: { type: String, default: 'ZKTeco' },
  status: {
    type: String,
    enum: ['NEW', 'ASSIGNED', 'ACTIVE', 'BLOCKED'],
    default: 'NEW'
  }
}, { timestamps: true });

module.exports = mongoose.model('Device', schema);