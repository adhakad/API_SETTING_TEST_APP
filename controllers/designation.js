'use strict';

const designationService = require('../services/designation');

exports.create = async (req, res) => {
  try {
    const data = await designationService.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create designation' });
  }
};

exports.list = async (req, res) => {
  try {
    const data = await designationService.list(req.query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch designations' });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await designationService.update(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update designation' });
  }
};

exports.disable = async (req, res) => {
  try {
    await designationService.disable(req.params.id);
    res.json({ message: 'Designation disabled' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to disable designation' });
  }
};