'use strict';

const router = require('express').Router();
const ctrl = require('../controllers/payroll');

router.post('/generate', ctrl.generate);
router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/:id/lock', ctrl.lock);

module.exports = router;