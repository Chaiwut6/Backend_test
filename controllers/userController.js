const { User, Wallet } = require("../models");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password });
  await Wallet.bulkCreate([
    { user_id: user.id, type: 'fiat', currency: 'THB', balance: 0 },
    { user_id: user.id, type: 'crypto', currency: 'BTC', balance: 0 }
  ]);
  res.status(201).json(user);
};

exports.getAll = async (req, res) => {
  const users = await User.findAll({ include: Wallet });
  res.json(users);
};