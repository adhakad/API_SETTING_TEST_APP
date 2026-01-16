'use strict';

const router = require('express').Router();
const ctrl = require('../controllers/staff');

router.post('/', ctrl.create);
router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.disable);

// mapping
router.post('/:id/rfid', ctrl.mapRfid);
router.post('/:id/device', ctrl.mapDevice);

module.exports = router;