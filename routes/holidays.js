'use strict';

const router = require('express').Router();
const ctrl = require('../controllers/holiday');

router.post('/', ctrl.create);
router.get('/', ctrl.list);
router.delete('/:id', ctrl.remove);

module.exports = router;