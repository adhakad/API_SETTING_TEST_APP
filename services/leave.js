'use strict';

const Leave = require('../models/LeaveRequest');

exports.apply = (d) => Leave.create(d);
exports.list = (q) => Leave.find(q);

exports.approve = (id, userId) =>
  Leave.findByIdAndUpdate(id, {
    status: 'APPROVED',
    actionBy: userId,
    actionAt: new Date()
  });

exports.reject = (id, userId) =>
  Leave.findByIdAndUpdate(id, {
    status: 'REJECTED',
    actionBy: userId,
    actionAt: new Date()
  });