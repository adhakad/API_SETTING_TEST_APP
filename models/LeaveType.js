const mongoose = require('mongoose');

module.exports = mongoose.model(
  'LeaveType',
  new mongoose.Schema({
    schoolId: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    maxPerYear: Number,
    paid: { type: Boolean, default: true },
    status: { type: String, enum: ['ACTIVE','INACTIVE'], default: 'ACTIVE' }
  }, { timestamps: true })
);