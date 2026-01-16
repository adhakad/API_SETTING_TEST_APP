'use strict';
const mongoose = require('mongoose');

module.exports = mongoose.model('staffAttendance', {
  schoolId: { type: String, required: true, trim: true },
  staffId: { type: String, required: true, trim: true },

  date: { type: String, required: true, trim: true }, // YYYY-MM-DD

  inTime: String,
  outTime: String,

  workingMinutes: { type: Number, default: 0 },

  status: {
    type: String,
    enum: ['Present', 'Absent', 'HalfDay', 'Leave', 'Holiday'],
    required: true
  },

  source: {
    type: String,
    enum: ['WDMS', 'Manual'],
    default: 'WDMS'
  },

  punchHash: { type: String, required: true }, // 🔒 duplicate guard

  createdAt: { type: Date, default: Date.now }
});
