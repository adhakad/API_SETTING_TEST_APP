'use strict';

/**
 * Server bootstrap
 * Loads infra first, then app
 */

require('./config');   // env, db, redis, cron

const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Schooliya API running on port ${PORT}`);
});