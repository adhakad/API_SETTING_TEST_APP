'use strict';

const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
  terminal_sn: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  device_name: String,
  alias: String,

  // future use
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false
  },

  active: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Device', DeviceSchema);
