'use strict';

const cron = require('node-cron');
const attendanceQueue = require('../queues/attendance');
const deviceQueue = require('../queues/device');

// Attendance – every 10 minutes
cron.schedule('* * * * *', async () => {
  console.log('[CRON] Attendance sync triggered');
  await attendanceQueue.add('attendance-sync');
});

// Device – daily 2 AM
cron.schedule('*/2 * * * *', async () => {
  console.log('[CRON] Device sync triggered');
  await deviceQueue.add('device-sync');
});

console.log('✅ Cron jobs initialized');
