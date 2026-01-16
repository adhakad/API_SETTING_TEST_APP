'use strict';

const LeaveType = require('../models/LeaveType');

exports.create = (d) => LeaveType.create(d);
exports.list = (q) => LeaveType.find(q);
exports.update = (id, d) => LeaveType.findByIdAndUpdate(id, d, { new: true });
exports.disable = (id) => LeaveType.findByIdAndUpdate(id, { status: 'INACTIVE' });
