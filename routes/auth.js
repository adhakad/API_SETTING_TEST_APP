'use strict';

const router = require('express').Router();
const ctrl = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');

router.post('/login', ctrl.login);
router.post('/register', ctrl.register);
router.post('/logout', ctrl.logout);
router.get('/me', authMiddleware, ctrl.me);

module.exports = router;