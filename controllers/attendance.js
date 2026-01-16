'use strict';

const attendanceService = require('../services/attendance');

exports.staff = async (req, res) => {
  try {
    const data = await attendanceService.staff(req.query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch staff attendance' });
  }
};

exports.students = async (req, res) => {
  try {
    const data = await attendanceService.students(req.query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch student attendance' });
  }
};

exports.manual = async (req, res) => {
  try {
    await attendanceService.manual(req.body);
    res.json({ message: 'Attendance marked manually' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to mark attendance' });
  }
};

exports.syncNow = async (req, res) => {
  try {
    await attendanceService.syncNow(req.body.schoolId);
    res.json({ message: 'Sync triggered' });
  } catch (err) {
    res.status(500).json({ message: 'Sync failed' });
  }
};