'use strict';

const Student = require('../models/Student');

exports.create = (d) => Student.create(d);
exports.list = (q) => Student.find(q);
exports.get = (id) => Student.findById(id);
exports.update = (id, d) => Student.findByIdAndUpdate(id, d, { new: true });
exports.disable = (id) => Student.findByIdAndUpdate(id, { status: 'LEFT' });

exports.mapRfid = (id, rfid) =>
  Student.findByIdAndUpdate(id, { rfidCardNo: rfid });