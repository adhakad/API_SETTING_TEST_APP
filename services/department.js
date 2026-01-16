'use strict';

const Department = require('../models/Department');

exports.create = (data) => Department.create(data);
exports.list = (query) => Department.find(query);
exports.update = (id, data) => Department.findByIdAndUpdate(id, data, { new: true });
exports.disable = (id) => Department.findByIdAndUpdate(id, { status: 'INACTIVE' });