const mongoose = require('mongoose');

module.exports = mongoose.model(
  'SalaryStructure',
  new mongoose.Schema({
    schoolId: { type: mongoose.Schema.Types.ObjectId, required: true },
    staffId: { type: mongoose.Schema.Types.ObjectId, required: true },

    basic: Number,
    hra: Number,
    allowances: Number,
    deductions: Number,

    effectiveFrom: { type: Date, required: true }
  }, { timestamps: true })
);
