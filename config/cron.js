'use strict';

const cron = require('node-cron');
const { exec } = require('child_process');

cron.schedule('*/10 * * * *', () => {
  console.log('⏰ CRON triggered');

  exec('node src/workers/device.worker.js');
  exec('node src/workers/attendance.worker.js');
});

console.log('✅ Cron initialized (every 10 minutes)');
