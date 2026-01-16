'use strict';

const router = require('express').Router();
const ctrl = require('../controllers/attendance');

// views
router.get('/staff', ctrl.staff);
router.get('/students', ctrl.students);

// manual
router.post('/manual', ctrl.manual);

// emergency sync
router.post('/sync-now', ctrl.syncNow);

module.exports = router;