'use strict';

const router = require('express').Router();
const ctrl = require('../controllers/device');

router.get('/', ctrl.list);
router.post('/assign', ctrl.assign);
router.post('/activate', ctrl.activate);
router.post('/block', ctrl.block);

module.exports = router;