'use strict';

const {
  fetchAttendance,
  fetchEmployees,
  fetchDepartments,
  fetchPositions,
  fetchDevices
} = require('../services/wdms');

const devices = async (req, res) => {
  try {
    const data = await fetchDevices();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch devices' });
  }
};

const users = async (req, res) => {
  try {
    const data = await fetchEmployees();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch employees' });
  }
};

const attendance = async (req, res) => {
  try {
    const data = await fetchAttendance(req.query);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch attendance' });
  }
};

module.exports = {
  devices,
  users,
  attendance
};