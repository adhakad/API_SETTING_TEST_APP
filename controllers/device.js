'use strict';

const deviceService = require('../services/device');

const list = async (req, res) => {
  try {
    const data = await deviceService.list(req.query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch devices' });
  }
};

const assign = async (req, res) => {
  try {
    await deviceService.assign(req.body);
    res.json({ message: 'Device assigned' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to assign device' });
  }
};

const activate = async (req, res) => {
  try {
    await deviceService.activate(req.body.deviceId);
    res.json({ message: 'Device activated' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to activate device' });
  }
};

const block = async (req, res) => {
  try {
    await deviceService.block(req.body.deviceId);
    res.json({ message: 'Device blocked' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to block device' });
  }
};

module.exports = { list, assign, activate, block };