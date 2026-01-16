'use strict';

const axios = require('axios');

const WDMS_BASE_URL = 'http://127.0.0.1:8085';

const WDMS_USER = 'admin';        // 👈 WDMS username
const WDMS_PASS = 'Admin@123';     // 👈 WDMS password

async function fetchAttendanceRaw() {
  try {
    console.log('➡️ Calling WDMS with auth...');

    const res = await axios.get(
      `${WDMS_BASE_URL}/iclock/api/transactions/`,
      {
        auth: {
          username: WDMS_USER,
          password: WDMS_PASS
        },
        timeout: 10000
      }
    );

    console.log('✅ WDMS STATUS:', res.status);
    return res.data?.data || [];

  } catch (err) {
    console.error('❌ WDMS ERROR');

    if (err.response) {
      console.error('STATUS:', err.response.status);
      console.error('DATA:', err.response.data);
    } else {
      console.error(err.message);
    }

    return [];
  }
}

module.exports = { fetchAttendanceRaw };
