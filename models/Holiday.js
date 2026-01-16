const mongoose = require('mongoose');

module.exports = mongoose.model(
  'Holiday',
  new mongoose.Schema({
    schoolId: { type: mongoose.Schema.Types.ObjectId, required: true },
    date: { type: String, required: true }, // YYYY-MM-DD
    title: String
  }, { timestamps: true })
);
