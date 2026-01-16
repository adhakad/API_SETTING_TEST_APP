'use strict';

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const School = require('../models/School');

/**
 * Login user
 */
exports.login = async ({ email, password, schoolCode }) => {
  
  // Find school by code
  const school = await School.findOne({ code: schoolCode, status: 'ACTIVE' });
  if (!school) {
    throw new Error('Invalid school code');
  }

  // Find user
  const user = await User.findOne({ 
    email, 
    schoolId: school._id,
    status: 'ACTIVE'
  });

  if (!user) {
    throw new Error('Invalid credentials');
  }

  // Check password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  // Generate JWT token
  const token = jwt.sign(
    { 
      userId: user._id,
      schoolId: school._id,
      role: user.role
    },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '7d' }
  );

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      schoolId: school._id,
      schoolName: school.name
    }
  };
};

/**
 * Register new user
 */
exports.register = async (data) => {
  
  // Check if school exists
  const school = await School.findById(data.schoolId);
  if (!school) {
    throw new Error('School not found');
  }

  // Check if email already exists
  const exists = await User.findOne({ email: data.email });
  if (exists) {
    throw new Error('Email already registered');
  }

  // Create user
  const user = await User.create(data);

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role
  };
};

/**
 * Get current user
 */
exports.getCurrentUser = async (userId) => {
  const user = await User.findById(userId)
    .select('-password')
    .populate('schoolId', 'name code');

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};
