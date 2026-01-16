'use strict';

const { Worker } = require('bullmq');
const { connection } = require('../config/redis');
const School = require('../models/School');
const Device = require('../models/Device');
const syncService = require('../services/sync');

module.exports = new Worker(
  'device-sync',
  async () => {
    console.log('[WORKER] Device sync started');

    const schools = await School.find({ status: 'ACTIVE' });

    for (const school of schools) {
      const devices = await syncService.fetchDevices({ schoolId: school._id });
      if (!devices?.length) continue;

      const ops = devices.map(d => ({
        updateOne: {
          filter: { schoolId: school._id, serialNo: d.serialNo },
          update: { $set: d },
          upsert: true
        }
      }));

      await Device.bulkWrite(ops);
      console.log(`✅ ${school.code} → ${ops.length} devices`);
    }
  },
  { connection, concurrency: 1 }
);
