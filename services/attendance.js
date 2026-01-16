'use strict';

const Staff = require('../models/Staff');
const Student = require('../models/Student');
const StaffAttendance = require('../models/StaffAttendance');
const StudentAttendance = require('../models/StudentAttendance');
const makeHash = require('./helpers/punchHash');
const { toDate } = require('./helpers/date');
const wdms = require('./wdms');

/**
 * Process staff punch
 */
exports.processPunch = async (schoolId, punch) => {
  const staff = await Staff.findOne({
    schoolId,
    rfidCardNo: punch.cardno,
    status: 'ACTIVE'
  });
  
  if (!staff) return;

  const date = toDate(punch.punch_time);
  const hash = makeHash(schoolId, staff._id, punch.punch_time);

  const exists = await StaffAttendance.findOne({ punchHash: hash });
  if (exists) return;

  const day = await StaffAttendance.findOne({
    schoolId, 
    staffId: staff._id, 
    date
  });

  if (!day) {
    await StaffAttendance.create({
      schoolId,
      staffId: staff._id,
      date,
      inTime: punch.punch_time,
      punchHash: hash
    });
  } else if (!day.outTime) {
    day.outTime = punch.punch_time;
    await day.save();
  }
};

/**
 * Get staff attendance
 */
exports.staff = async (query) => {
  return StaffAttendance.find(query)
    .populate('staffId', 'name empCode')
    .sort({ date: -1 });
};

/**
 * Get student attendance
 */
exports.students = async (query) => {
  return StudentAttendance.find(query)
    .populate('studentId', 'name admissionNo class section')
    .sort({ date: -1 });
};

/**
 * Manual attendance
 */
exports.manual = async ({
  schoolId,
  userType,
  userId,
  date,
  inTime,
  outTime
}) => {

  const punchHash = makeHash(schoolId, userId, `${date}_${inTime || 'NA'}`);

  if (userType === 'STAFF') {
    const exists = await StaffAttendance.findOne({ punchHash });
    if (exists) return exists;

    return StaffAttendance.create({
      schoolId,
      staffId: userId,
      date,
      inTime,
      outTime,
      source: 'MANUAL',
      punchHash
    });
  }

  if (userType === 'STUDENT') {
    const exists = await StudentAttendance.findOne({ punchHash });
    if (exists) return exists;

    return StudentAttendance.create({
      schoolId,
      studentId: userId,
      date,
      inTime,
      outTime,
      source: 'MANUAL',
      punchHash
    });
  }
};

/**
 * Emergency sync
 */
exports.syncNow = async ({ schoolId, from, to }) => {
  const punches = await wdms.fetchAttendance({
    start: from,
    end: to
  });

  for (const p of punches.data || []) {
    await exports.processPunch(schoolId, p);
  }

  return { success: true };
};