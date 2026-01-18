'use strict';

const { Queue } = require('bullmq');
const redis = require('../config/redis');

module.exports = new Queue('attendance-sync', {
  connection: redis.connection,
  defaultJobOptions: redis.defaultJobOptions
});
