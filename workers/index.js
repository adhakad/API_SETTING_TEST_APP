'use strict';

require('dotenv').config();
require('../config/db');

require('./attendance');
require('./device');

console.log('🚀 Workers started');
