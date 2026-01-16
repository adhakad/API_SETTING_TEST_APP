'use strict';

const leaveTypeService = require('../services/leaveType');

exports.create = async (req, res) => {
  try {
    const data = await leaveTypeService.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create leave type' });
  }
};

exports.list = async (req, res) => {
  try {
    const data = await leaveTypeService.list(req.query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch leave types' });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await leaveTypeService.update(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update leave type' });
  }
};

exports.disable = async (req, res) => {
  try {
    await leaveTypeService.disable(req.params.id);
    res.json({ message: 'Leave type disabled' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to disable leave type' });
  }
};