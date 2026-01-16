'use strict';

const authService = require('../services/auth');

/**
 * Login
 */
exports.login = async (req, res) => {
  try {
    const result = await authService.login(req.body);
    res.json(result);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

/**
 * Register
 */
exports.register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/**
 * Get current user
 */
exports.me = async (req, res) => {
  try {
    const user = await authService.getCurrentUser(req.user.userId);
    res.json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/**
 * Logout (client-side only, just for consistency)
 */
exports.logout = async (req, res) => {
  res.json({ message: 'Logged out successfully' });
};