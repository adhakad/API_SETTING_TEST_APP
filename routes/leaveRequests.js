'use strict';

const router = require('express').Router();
const ctrl = require('../controllers/leaveRequest');

router.post('/', ctrl.apply);
router.get('/', ctrl.list);

router.post('/:id/approve', ctrl.approve);
router.post('/:id/reject', ctrl.reject);

module.exports = router;