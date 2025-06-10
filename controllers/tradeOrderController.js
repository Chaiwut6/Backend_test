const { TradeOrder, User } = require("../models");

exports.createOrder = async (req, res) => {
  const order = await TradeOrder.create(req.body);
  res.status(201).json(order);
};

exports.getAll = async (req, res) => {
  const orders = await TradeOrder.findAll({ include: User });
  res.json(orders);
};