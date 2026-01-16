const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  schoolId: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  status: { type: String, enum: ['ACTIVE','INACTIVE'], default: 'ACTIVE' }
}, { timestamps: true });

schema.index({ schoolId: 1, name: 1 }, { unique: true });

module.exports = mongoose.model('Department', schema);