'use strict';

const { Worker } = require('bullmq');
const { connection } = require('../config/redis');
const WdmsAttendanceRaw = require('../models/WdmsAttendanceRaw');
const { fetchAttendanceRaw } = require('../services/sync');

module.exports = new Worker(
  'attendance-sync',
  async () => {
    console.log('🚀 WDMS attendance raw sync started');

    const rows = await fetchAttendanceRaw();

    console.log('📥 Attendance rows from WDMS:', rows.length);

    if (!rows.length) return;

    const docs = rows.map(r => ({
      ...r,
      raw: r
    }));

    await WdmsAttendanceRaw.insertMany(docs);

    console.log('✅ Attendance data saved:', docs.length);
  },
  { connection }
);
