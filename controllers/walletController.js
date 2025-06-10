const { Wallet, User } = require("../models");

exports.getAll = async (req, res) => {
  const wallets = await Wallet.findAll({ include: User });
  res.json(wallets);
};