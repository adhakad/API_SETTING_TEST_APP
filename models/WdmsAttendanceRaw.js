'use strict';

const mongoose = require('mongoose');

const WdmsAttendanceRawSchema = new mongoose.Schema(
  {
    emp_code: String,
    punch_time: String,
    punch_state: String,
    verify_type: Number,
    work_code: String,
    terminal_sn: String,
    terminal_alias: String,
    area_alias: String,
    source: Number,
    upload_time: String,
    company: String,
    emp: String,
    terminal: Number,

    raw: Object,           // full raw row (safety)
    receivedAt: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false }
);

module.exports = mongoose.model(
  'WdmsAttendanceRaw',
  WdmsAttendanceRawSchema
);
