'use strict';

const { REDIS } = require('./env');

module.exports = {
  connection: {
    host: REDIS.HOST,
    port: REDIS.PORT,
    password: REDIS.PASSWORD,
    tls: REDIS.TLS ? {} : undefined
  },

  defaultJobOptions: {
    attempts: 3,
    removeOnComplete: true,
    removeOnFail: false
  }
};
