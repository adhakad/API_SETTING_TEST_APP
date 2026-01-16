'use strict';

const syncService = require('../services/sync');

const syncAttendance = async (req, res) => {
  try {
    await syncService.queueAttendance(req.body);
    res.json({ success: true, message: 'Attendance sync queued' });
  } catch (err) {
    res.status(500).json({ message: 'Attendance sync failed' });
  }
};

const syncDevices = async (req, res) => {
  try {
    await syncService.queueDevices(req.body);
    res.json({ success: true, message: 'Device sync queued' });
  } catch (err) {
    res.status(500).json({ message: 'Device sync failed' });
  }
};

module.exports = {
  syncAttendance,
  syncDevices
};