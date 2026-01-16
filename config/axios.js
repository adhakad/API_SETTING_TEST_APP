'use strict';

const axios = require('axios');
const { WDMS } = require('./env');

const wdmsClient = axios.create({
  baseURL: WDMS.BASE_URL,
  timeout: 15000,
  headers: {
    Authorization: `Bearer ${WDMS.TOKEN}`
  }
});

module.exports = wdmsClient;