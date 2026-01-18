'use strict';

const axios = require('axios');

const client = axios.create({
  baseURL: process.env.WDMS_BASE_URL || 'http://127.0.0.1:8085',
  auth: {
    username: process.env.WDMS_USER || 'admin',
    password: process.env.WDMS_PASS || 'Admin@123'
  },
  timeout: 15000
});

async function fetchDevices(next = null) {
  try {
    const url = next || '/iclock/api/terminals/';
    const res = await client.get(url);

    return {
      rows: res.data?.data || [],
      next: res.data?.next || null
    };
  } catch (err) {
    console.error('❌ WDMS Device fetch error:', err.message);
    return { rows: [], next: null };
  }
}

async function fetchAttendance(next = null) {
  try {
    const url = next || '/iclock/api/transactions/';
    const res = await client.get(url);
    console.log(res)
    return {
      rows: res.data?.data || [],
      next: res.data?.next || null
    };
  } catch (err) {
    console.error('❌ WDMS Attendance fetch error:', err.message);
    return { rows: [], next: null };
  }
}

module.exports = {
  fetchDevices,
  fetchAttendance
};
