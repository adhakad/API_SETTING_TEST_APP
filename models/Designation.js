const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  schoolId: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  status: { type: String, enum: ['ACTIVE','INACTIVE'], default: 'ACTIVE' }
}, { timestamps: true });

schema.index({ schoolId: 1, title: 1 }, { unique: true });
