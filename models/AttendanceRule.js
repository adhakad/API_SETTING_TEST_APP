const mongoose = require('mongoose');

module.exports = mongoose.model(
  'AttendanceRule',
  new mongoose.Schema({
    schoolId: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },

    workStart: String,   // 09:00
    lateAfter: Number,   // minutes
    halfDayAfter: Number,

    allowOvertime: { type: Boolean, default: false }
  }, { timestamps: true })
);