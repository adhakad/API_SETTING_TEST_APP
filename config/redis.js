'use strict';

const { REDIS } = require('./env');
const Redis = require('ioredis'); // Status check karne ke liye zaroori hai

const connectionConfig = {
  host: REDIS.HOST,
  port: REDIS.PORT,
  password: REDIS.PASSWORD,
  tls: {}, // Upstash ke liye mandatory hai
  connectTimeout: 20000, 
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
  family: 4 
};

// --- Connection Check Logic ---
// Ek temporary instance banayein status dekhne ke liye
const checkConn = new Redis(connectionConfig);

checkConn.on('connect', () => {
  console.log('🚀 [Redis] Connecting to Upstash...');
});

checkConn.on('ready', () => {
  console.log('✅ [Redis] Upstash Connected Successfully!');
});

checkConn.on('error', (err) => {
  console.error('❌ [Redis] Connection Error:', err.message);
});
// ------------------------------

module.exports = {
  connection: connectionConfig,
  defaultJobOptions: {
    attempts: 5,
    backoff: { type: 'exponential', delay: 5000 },
    removeOnComplete: true,
    removeOnFail: 1000
  }
};
