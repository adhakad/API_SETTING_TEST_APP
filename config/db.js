'use strict';

const mongoose = require('mongoose');
const { MONGO_URI } = require('./env');

mongoose.set('strictQuery', true);

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.error('❌ MongoDB connection failed', err);
    process.exit(1);
  });

module.exports = mongoose;