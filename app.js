'use strict';

const express = require('express');
const app = express();

// core middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
require('./routes')(app);

// health check
app.get('/health', (_, res) => {
  res.json({ status: 'OK', service: 'Schooliya API' });
});

module.exports = app;
