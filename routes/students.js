'use strict';

const router = require('express').Router();
const ctrl = require('../controllers/student');

router.post('/', ctrl.create);
router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.disable);

router.post('/:id/rfid', ctrl.mapRfid);

module.exports = router;