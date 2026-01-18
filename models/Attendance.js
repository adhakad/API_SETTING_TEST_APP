'use strict';

const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  terminal_sn: { type: String, index: true },
  emp_code: String,
  punch_time: Date,
  punch_state: Number
}, { timestamps: true });

AttendanceSchema.index(
  { terminal_sn: 1, emp_code: 1, punch_time: 1 },
  { unique: true }
);

module.exports = mongoose.model('Attendance', AttendanceSchema);
