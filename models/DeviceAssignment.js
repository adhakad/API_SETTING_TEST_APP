const mongoose = require('mongoose');

module.exports = mongoose.model(
  'DeviceAssignment',
  new mongoose.Schema({
    schoolId: { type: mongoose.Schema.Types.ObjectId, required: true, index: true },
    deviceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    activeFrom: { type: Date, required: true },
    activeTo: Date,
    status: { type: String, enum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE' }
  }, { timestamps: true })
);
