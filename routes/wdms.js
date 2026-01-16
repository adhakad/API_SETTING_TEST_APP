'use strict';

const router = require('express').Router();
const ctrl = require('../controllers/wdms');

// raw data from WDMS
router.get('/devices', ctrl.devices);
router.get('/users', ctrl.users);
router.get('/attendance', ctrl.attendance);

module.exports = router;