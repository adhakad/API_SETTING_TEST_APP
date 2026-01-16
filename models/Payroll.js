const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  schoolId: { type: mongoose.Schema.Types.ObjectId, required: true },
  staffId: { type: mongoose.Schema.Types.ObjectId, required: true },

  month: { type: String, required: true }, // YYYY-MM
  presentDays: Number,
  absentDays: Number,

  grossSalary: Number,
  deductions: Number,
  netSalary: Number,

  status: { type: String, enum: ['DRAFT','LOCKED'], default: 'DRAFT' }
}, { timestamps: true });

schema.index({ schoolId: 1, staffId: 1, month: 1 }, { unique: true });

module.exports = mongoose.model('Payroll', schema);