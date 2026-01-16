'use strict';

const authMiddleware = require('./middlewares/auth');
const tenantMiddleware = require('./middlewares/tenant');

module.exports = app => {

  // ========== PUBLIC ROUTES ==========
  
  // Auth (no auth required)
  app.use('/v1/auth', require('./routes/auth'));

  // WDMS raw adapter (no auth for testing)
  app.use('/v1/wdms', require('./routes/wdms'));

  // ========== PROTECTED ROUTES ==========
  // All routes below require authentication + tenant
  
  // Sync operations
  app.use('/v1/sync', authMiddleware, tenantMiddleware, require('./routes/sync'));

  // Devices
  app.use('/v1/devices', authMiddleware, tenantMiddleware, require('./routes/devices'));

  // Masters
  app.use('/v1/departments', authMiddleware, tenantMiddleware, require('./routes/departments'));
  app.use('/v1/designations', authMiddleware, tenantMiddleware, require('./routes/designations'));

  // Staff & Students
  app.use('/v1/staff', authMiddleware, tenantMiddleware, require('./routes/staff'));
  app.use('/v1/students', authMiddleware, tenantMiddleware, require('./routes/students'));

  // Attendance
  app.use('/v1/attendance', authMiddleware, tenantMiddleware, require('./routes/attendance'));

  // Rules / Holidays
  app.use('/v1/attendance-rules', authMiddleware, tenantMiddleware, require('./routes/attendanceRules'));
  app.use('/v1/holidays', authMiddleware, tenantMiddleware, require('./routes/holidays'));

  // Leave
  app.use('/v1/leave-types', authMiddleware, tenantMiddleware, require('./routes/leaveTypes'));
  app.use('/v1/leave-requests', authMiddleware, tenantMiddleware, require('./routes/leaveRequests'));

  // Payroll
  app.use('/v1/payroll', authMiddleware, tenantMiddleware, require('./routes/payroll'));
};