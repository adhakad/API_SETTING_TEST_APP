'use strict';

const Payroll = require('../models/Payroll');
const StaffAttendance = require('../models/StaffAttendance');

exports.generate = async ({ schoolId, staffId, month }) => {
  const days = await StaffAttendance.countDocuments({
    schoolId,
    staffId,
    date: { $regex: `^${month}` }
  });

  return Payroll.create({
    schoolId,
    staffId,
    month,
    presentDays: days,
    absentDays: 0,
    netSalary: 0
  });
};

exports.list = (q) => Payroll.find(q);
exports.get = (id) => Payroll.findById(id);
exports.lock = (id) =>
  Payroll.findByIdAndUpdate(id, { status: 'LOCKED' });
