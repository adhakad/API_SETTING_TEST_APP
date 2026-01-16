'use strict';

const leaveService = require('../services/leave');

exports.apply = async (req, res) => {
  try {
    const data = await leaveService.apply(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to apply leave' });
  }
};

exports.list = async (req, res) => {
  try {
    const data = await leaveService.list(req.query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch leave requests' });
  }
};

exports.approve = async (req, res) => {
  try {
    await leaveService.approve(req.params.id, req.user?.id);
    res.json({ message: 'Leave approved' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to approve leave' });
  }
};

exports.reject = async (req, res) => {
  try {
    await leaveService.reject(req.params.id, req.user?.id);
    res.json({ message: 'Leave rejected' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to reject leave' });
  }
};
