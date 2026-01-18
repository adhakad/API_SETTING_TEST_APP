'use strict';

require('../config/db');
const { fetchDevices } = require('../services/sync');
const Device = require('../models/Device');

(async () => {
  console.log('🚀 Device worker started');

  let page = null;

  do {
    const { rows, next } = await fetchDevices(page);
    page = next;
    if (!rows.length) break;

    const ops = rows.map(d => ({
      updateOne: {
        filter: { terminal_sn: d.sn },
        update: {
          terminal_sn: d.sn,
          device_name: d.terminal_name,
          alias: d.alias,
          active: d.state === 1
        },
        upsert: true
      }
    }));

    await Device.bulkWrite(ops, { ordered: false });
    console.log(`✅ Devices synced: ${rows.length}`);
  } while (page);

  console.log('🎉 Device sync completed');
  process.exit(0);
})();
