'use strict';

const axios = require('axios');
const { getWdmsToken } = require('../utils/wdms-token');

const BASE = process.env.WDMS_BASE_URL;

const request = async (method, url, params = {}) => {
  const token = await getWdmsToken();
  return axios({
    method,
    url: `${BASE}${url}`,
    params,
    headers: { Authorization: `Token ${token}` }
  });
};

exports.fetchAttendance = async (query) => {
  const res = await request('GET', '/iclock/api/transactions/', query);
  return res.data;
};

exports.fetchEmployees = async () => {
  const res = await request('GET', '/personnel/api/employees/');
  return res.data;
};

exports.fetchDepartments = async () => {
  const res = await request('GET', '/personnel/api/departments/');
  return res.data;
};

exports.fetchPositions = async () => {
  const res = await request('GET', '/personnel/api/positions/');
  return res.data;
};

exports.fetchDevices = async () => {
  const res = await request('GET', '/iclock/api/terminals/');
  return res.data;
};
