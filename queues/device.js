'use strict';

const { Queue } = require('bullmq');
const { connection } = require('../config/redis');

module.exports = new Queue('device-sync', { connection });