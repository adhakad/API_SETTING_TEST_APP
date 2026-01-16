const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  schoolId: { type: mongoose.Schema.Types.ObjectId, required: true },

  empCode: { type: String, required: true },
  name: { type: String, required: true },

  departmentId: mongoose.Schema.Types.ObjectId,
  designationId: mongoose.Schema.Types.ObjectId,

  rfidCardNo: { type: String, sparse: true },
  deviceIds: [mongoose.Schema.Types.ObjectId],

  joiningDate: Date,
  status: { type: String, enum: ['ACTIVE','LEFT','SUSPENDED'], default: 'ACTIVE' }
}, { timestamps: true });

schema.index({ schoolId: 1, empCode: 1 }, { unique: true });
schema.index({ schoolId: 1, rfidCardNo: 1 }, { unique: true, sparse: true });

module.exports = mongoose.model('Staff', schema);
