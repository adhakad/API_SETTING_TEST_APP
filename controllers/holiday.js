'use strict';

const holidayService = require('../services/holiday');

exports.create = async (req, res) => {
  try {
    const data = await holidayService.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create holiday' });
  }
};

exports.list = async (req, res) => {
  try {
    const data = await holidayService.list(req.query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch holidays' });
  }
};

exports.remove = async (req, res) => {
  try {
    await holidayService.remove(req.params.id);
    res.json({ message: 'Holiday removed' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove holiday' });
  }
};
