'use strict';

const Device = require('../models/Device');
const DeviceAssignment = require('../models/DeviceAssignment');

exports.list = (query) => Device.find(query);

exports.assign = async ({ deviceId, schoolId }) => {
  await DeviceAssignment.create({
    deviceId,
    schoolId,
    activeFrom: new Date()
  });
  await Device.findByIdAndUpdate(deviceId, { status: 'ASSIGNED' });
};

exports.activate = (deviceId) =>
  Device.findByIdAndUpdate(deviceId, { status: 'ACTIVE' });

exports.block = (deviceId) =>
  Device.findByIdAndUpdate(deviceId, { status: 'BLOCKED' });

exports.upsertFromWdms = async (d) => {
  await Device.updateOne(
    { terminalSn: d.sn },
    { model: d.model, vendor: 'ZKTeco' },
    { upsert: true }
  );
};