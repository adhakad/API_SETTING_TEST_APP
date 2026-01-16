'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = new mongoose.Schema({
  schoolId: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    ref: 'School',
    index: true
  },

  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true
  },

  password: { 
    type: String, 
    required: true 
  },

  name: { 
    type: String, 
    required: true 
  },

  role: { 
    type: String, 
    enum: ['ADMIN', 'PRINCIPAL', 'TEACHER', 'STAFF'],
    default: 'STAFF'
  },

  status: { 
    type: String, 
    enum: ['ACTIVE', 'INACTIVE'],
    default: 'ACTIVE'
  }

}, { timestamps: true });

// Hash password before saving
schema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password method
schema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', schema);