const crypto = require('crypto');

module.exports = (schoolId, userId, time) =>
  crypto.createHash('sha1')
    .update(`${schoolId}_${userId}_${time}`)
    .digest('hex');