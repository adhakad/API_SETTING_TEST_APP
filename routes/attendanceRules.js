'use strict';

const router = require('express').Router();
const ctrl = require('../controllers/attendanceRule');

router.post('/', ctrl.create);
router.get('/', ctrl.get);
router.put('/:id', ctrl.update);

module.exports = router;