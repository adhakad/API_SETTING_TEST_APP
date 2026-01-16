'use strict';

const staffService = require('../services/staff');

exports.create = async (req, res) => {
  try {
    const data = await staffService.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create staff' });
  }
};

exports.list = async (req, res) => {
  try {
    const data = await staffService.list(req.query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch staff' });
  }
};

exports.get = async (req, res) => {
  try {
    const data = await staffService.get(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch staff details' });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await staffService.update(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update staff' });
  }
};

exports.disable = async (req, res) => {
  try {
    await staffService.disable(req.params.id);
    res.json({ message: 'Staff disabled' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to disable staff' });
  }
};

exports.mapRfid = async (req, res) => {
  try {
    await staffService.mapRfid(req.params.id, req.body.rfid);
    res.json({ message: 'RFID mapped' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to map RFID' });
  }
};

exports.mapDevice = async (req, res) => {
  try {
    await staffService.mapDevice(req.params.id, req.body.deviceId);
    res.json({ message: 'Device mapped' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to map device' });
  }
};