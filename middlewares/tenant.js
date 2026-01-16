'use strict';

/**
 * Multi-tenant middleware
 * Extract schoolId from JWT token
 */
module.exports = (req, res, next) => {
  
  // Get schoolId from JWT token (set by auth middleware)
  const schoolId = req.user?.schoolId;

  if (!schoolId) {
    return res.status(400).json({ message: 'School ID is required' });
  }

  // Attach to request
  req.schoolId = schoolId;

  next();
};
