'use strict';

require('../config/db');
const { fetchAttendance } = require('../services/sync');
const Attendance = require('../models/Attendance');

(async () => {
  console.log('🚀 Attendance worker started');

  let page = null;
  let saved = 0;

  do {
    const { rows, next } = await fetchAttendance(page);
    page = next;
    if (!rows.length) break;

    const docs = rows.map(r => ({
      terminal_sn: r.sn,
      emp_code: r.emp_code,
      punch_time: new Date(r.punch_time),
      punch_state: r.punch_state
    }));

    try {
      await Attendance.insertMany(docs, { ordered: false });
      saved += docs.length;
      console.log(`✅ Attendance saved: ${docs.length}`);
    } catch (e) {
      // duplicate errors ignore
    }

  } while (page);

  console.log(`🎉 TOTAL Attendance Saved: ${saved}`);
  process.exit(0);
})();
