const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  schoolId: { type: mongoose.Schema.Types.ObjectId, required: true },

  admissionNo: { type: String, required: true },
  name: { type: String, required: true },

  class: String,
  section: String,

  rfidCardNo: { type: String, sparse: true },
  deviceIds: [mongoose.Schema.Types.ObjectId],

  status: { type: String, enum: ['ACTIVE','LEFT'], default: 'ACTIVE' }
}, { timestamps: true });

schema.index({ schoolId: 1, admissionNo: 1 }, { unique: true });
schema.index({ schoolId: 1, rfidCardNo: 1 }, { unique: true, sparse: true });

module.exports = mongoose.model('Student', schema);