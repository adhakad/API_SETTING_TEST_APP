'use strict';

const router = require('express').Router();
const controller = require('../controllers/leave');

router.post('/', controller.apply);
router.get('/', controller.list);

router.post('/:id/approve', controller.approve);
router.post('/:id/reject', controller.reject);
router.post('/:id/cancel', controller.cancel);

module.exports = router;
