'use strict';

const departmentService = require('../services/department');

exports.create = async (req, res) => {
  try {
    const data = await departmentService.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create department' });
  }
};

exports.list = async (req, res) => {
  try {
    const data = await departmentService.list(req.query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch departments' });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await departmentService.update(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update department' });
  }
};

exports.disable = async (req, res) => {
  try {
    await departmentService.disable(req.params.id);
    res.json({ message: 'Department disabled' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to disable department' });
  }
};
