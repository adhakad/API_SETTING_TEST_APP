'use strict';

const Staff = require('../models/Staff');

exports.create = (data) => Staff.create(data);
exports.list = (q) => Staff.find(q);
exports.get = (id) => Staff.findById(id);
exports.update = (id, d) => Staff.findByIdAndUpdate(id, d, { new: true });
exports.disable = (id) => Staff.findByIdAndUpdate(id, { status: 'LEFT' });

exports.mapRfid = (id, rfid) =>
  Staff.findByIdAndUpdate(id, { rfidCardNo: rfid });

exports.mapDevice = (id, deviceId) =>
  Staff.findByIdAndUpdate(id, { $addToSet: { deviceIds: deviceId } });
