'use strict';

const payrollService = require('../services/payroll');

exports.generate = async (req, res) => {
  try {
    const data = await payrollService.generate(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to generate payroll' });
  }
};

exports.list = async (req, res) => {
  try {
    const data = await payrollService.list(req.query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch payroll' });
  }
};

exports.get = async (req, res) => {
  try {
    const data = await payrollService.get(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch payroll details' });
  }
};

exports.lock = async (req, res) => {
  try {
    await payrollService.lock(req.params.id);
    res.json({ message: 'Payroll locked' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to lock payroll' });
  }
};