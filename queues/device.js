'use strict';

const { Queue } = require('bullmq');
const redis = require('../config/redis');

module.exports = new Queue('device-sync', {
  connection: redis.connection,
  defaultJobOptions: redis.defaultJobOptions
});
