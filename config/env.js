'use strict';

require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,

  MONGO_URI: process.env.MONGO_URI,

  REDIS: {
    HOST: process.env.UPSTASH_REDIS_ENDPOINT,
    PORT: 6379,
    PASSWORD: process.env.UPSTASH_REDIS_PASSWORD,
    TLS: true
  },

  WDMS: {
    BASE_URL: process.env.WDMS_BASE_URL,
    TOKEN: process.env.WDMS_TOKEN
  }
};
