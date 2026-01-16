'use strict';

const router = require('express').Router();
const ctrl = require('../controllers/designation');

router.post('/', ctrl.create);
router.get('/', ctrl.list);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.disable);

module.exports = router;
