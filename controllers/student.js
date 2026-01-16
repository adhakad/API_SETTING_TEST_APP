'use strict';

const studentService = require('../services/student');

exports.create = async (req, res) => {
  try {
    const data = await studentService.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create student' });
  }
};

exports.list = async (req, res) => {
  try {
    const data = await studentService.list(req.query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch students' });
  }
};

exports.get = async (req, res) => {
  try {
    const data = await studentService.get(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch student details' });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await studentService.update(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update student' });
  }
};

exports.disable = async (req, res) => {
  try {
    await studentService.disable(req.params.id);
    res.json({ message: 'Student disabled' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to disable student' });
  }
};

exports.mapRfid = async (req, res) => {
  try {
    await studentService.mapRfid(req.params.id, req.body.rfid);
    res.json({ message: 'RFID mapped' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to map RFID' });
  }
};