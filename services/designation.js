'use strict';

const Designation = require('../models/Designation');

exports.create = (data) => Designation.create(data);
exports.list = (query) => Designation.find(query);
exports.update = (id, data) => Designation.findByIdAndUpdate(id, data, { new: true });
exports.disable = (id) => Designation.findByIdAndUpdate(id, { status: 'INACTIVE' });
