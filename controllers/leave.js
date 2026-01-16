'use strict';

const leaveService = require('../services/leave');

exports.apply = async (req, res) => {
  res.status(201).json(await leaveService.apply(req.body));
};

exports.list = async (req, res) => {
  res.json(await leaveService.list(req.query));
};

exports.approve = async (req, res) => {
  await leaveService.approve(req.params.id, req.user.id);
  res.json({ success: true });
};

exports.reject = async (req, res) => {
  await leaveService.reject(req.params.id, req.user.id);
  res.json({ success: true });
};

exports.cancel = async (req, res) => {
  await leaveService.cancel(req.params.id);
  res.json({ success: true });
};
