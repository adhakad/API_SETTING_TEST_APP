const mongoose = require('mongoose');

module.exports = mongoose.model(
  'LeaveRequest',
  new mongoose.Schema({
    schoolId: { type: mongoose.Schema.Types.ObjectId, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },

    leaveTypeId: mongoose.Schema.Types.ObjectId,
    from: Date,
    to: Date,
    reason: String,

    status: {
      type: String,
      enum: ['PENDING','APPROVED','REJECTED'],
      default: 'PENDING'
    },

    actionBy: mongoose.Schema.Types.ObjectId,
    actionAt: Date
  }, { timestamps: true })
);
