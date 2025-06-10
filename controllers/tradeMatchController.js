const { TradeMatch, TradeOrder } = require("../models");

exports.createMatch = async (req, res) => {
  const match = await TradeMatch.create(req.body);
  res.status(201).json(match);
};

exports.getAll = async (req, res) => {
  const matches = await TradeMatch.findAll({
    include: [
      { model: TradeOrder, as: 'BuyOrder' },
      { model: TradeOrder, as: 'SellOrder' }
    ]
  });
  res.json(matches);
};
