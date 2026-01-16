'use strict';

const ruleService = require('../services/attendanceRule');

exports.create = async (req, res) => {
  try {
    const data = await ruleService.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create attendance rule' });
  }
};

exports.get = async (req, res) => {
  try {
    const data = await ruleService.get(req.query.schoolId);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch attendance rule' });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await ruleService.update(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update attendance rule' });
  }
};