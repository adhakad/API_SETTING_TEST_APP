'use strict';

const Rule = require('../models/AttendanceRule');

exports.create = (d) => Rule.create(d);
exports.get = (schoolId) => Rule.findOne({ schoolId });
exports.update = (id, d) => Rule.findByIdAndUpdate(id, d, { new: true });