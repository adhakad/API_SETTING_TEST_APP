'use strict';

const router = require('express').Router();
const ctrl = require('../controllers/sync');

router.post('/attendance', ctrl.syncAttendance);
router.post('/devices', ctrl.syncDevices);

module.exports = router;