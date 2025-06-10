const { Transaction, Wallet } = require("../models");

exports.createTransaction = async (req, res) => {
  const tx = await Transaction.create(req.body);
  res.status(201).json(tx);
};

exports.getAll = async (req, res) => {
  const txs = await Transaction.findAll({ include: ["FromWallet", "ToWallet"] });
  res.json(txs);
};
