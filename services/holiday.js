'use strict';

const Holiday = require('../models/Holiday');

exports.create = (d) => Holiday.create(d);
exports.list = (q) => Holiday.find(q);
exports.remove = (id) => Holiday.findByIdAndDelete(id);