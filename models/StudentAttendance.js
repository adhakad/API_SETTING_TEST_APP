const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  schoolId: { type: mongoose.Schema.Types.ObjectId, required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, required: true },

  date: { type: String, required: true },
  inTime: Date,
  outTime: Date,

  source: { type: String, enum: ['DEVICE','MANUAL'], default: 'DEVICE' },
  punchHash: { type: String, required: true }
}, { timestamps: true });

schema.index({ schoolId: 1, punchHash: 1 }, { unique: true });

module.exports = mongoose.model('StudentAttendance', schema);