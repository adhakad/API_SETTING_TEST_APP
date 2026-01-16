const mongoose = require('mongoose');

module.exports = mongoose.model(
  'School',
  new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    status: { type: String, enum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE' }
  }, { timestamps: true })
);