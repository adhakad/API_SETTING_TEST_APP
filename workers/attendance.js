'use strict';

require('../config/db');

const { fetchAttendance } = require('../services/sync');
const Attendance = require('../models/Attendance');

(async () => {
  console.log('🚀 Attendance worker started');

  let page = null;
  let totalSaved = 0;

  do {
    const { rows, next } = await fetchAttendance(page);
    page = next;

    if (!rows.length) break;

    console.log(`✅ Attendance batch fetched: ${rows.length}`);

    const docs = rows.map(r => ({
      terminal_sn: r.sn || r.terminal_sn,
      emp_code: r.emp_code,
      punch_time: new Date(r.punch_time),
      punch_state: Number(r.punch_state)
    }));

    try {
      const res = await Attendance.insertMany(docs, { ordered: false });
      totalSaved += res.length;
      console.log(`💾 Attendance saved: ${res.length}`);
    } catch (e) {
      if (e.writeErrors) {
        const inserted = e.result?.nInserted || 0;
        totalSaved += inserted;
        console.log(`⚠️ Duplicates skipped, saved: ${inserted}`);
      } else {
        console.error('❌ Attendance insert error:', e.message);
      }
    }

  } while (page);

  console.log(`🎉 TOTAL Attendance Saved: ${totalSaved}`);
  process.exit(0);
})();
