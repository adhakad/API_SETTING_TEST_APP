'use strict';
const axios = require('axios');

const WDMS_BASE_URL = process.env.WDMS_BASE_URL || 'http://127.0.0.1:8085';
const WDMS_USERNAME = process.env.WDMS_USERNAME || 'admin';
const WDMS_PASSWORD = process.env.WDMS_PASSWORD || 'Admin@123';


let cachedToken = null;
let tokenExpiry = null;

exports.getWdmsToken = async () => {
  
  // Return cached if valid
  if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
    return cachedToken;
  }

  try {
    // Use static token if available
    if (process.env.WDMS_TOKEN) {
      cachedToken = process.env.WDMS_TOKEN;
      tokenExpiry = Date.now() + (24 * 60 * 60 * 1000); // 24 hours
      return cachedToken;
    }

    // Fetch new token from WDMS (if dynamic auth needed)
    const response = await axios.post(`${WDMS_BASE_URL}/jwt-api-token-auth/`, {
      username: WDMS_USERNAME,
      password: WDMS_PASSWORD
    });

    cachedToken = response.data.token;
    tokenExpiry = Date.now() + (23 * 60 * 60 * 1000); // 23 hours
    
    return cachedToken;
    
  } catch (error) {
    console.error('❌ WDMS token fetch failed:', error.message);
    throw new Error('WDMS authentication failed');
  }
};