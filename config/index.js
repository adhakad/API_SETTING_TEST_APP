'use strict';

/**
 * Infra initializer
 * server.js loads only this file
 */

// env first
require('./env');

// infra
require('./db');
require('./redis');
require('./cron');