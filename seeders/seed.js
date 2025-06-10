const { sequelize, User, Wallet, TradeOrder } = require('../models');

async function seed() {
  await sequelize.sync({ force: true });
  const u1 = await User.create({ name: 'Alice', email: 'alice@x.com', password: '123' });
  const u2 = await User.create({ name: 'Bob', email: 'bob@x.com', password: '123' });

  await Wallet.bulkCreate([
    { user_id: u1.id, type: 'fiat', currency: 'THB', balance: 10000 },
    { user_id: u1.id, type: 'crypto', currency: 'BTC', balance: 1 },
    { user_id: u2.id, type: 'fiat', currency: 'THB', balance: 5000 },
    { user_id: u2.id, type: 'crypto', currency: 'BTC', balance: 0.5 }
  ]);

  await TradeOrder.create({ user_id: u1.id, type: 'buy', currency: 'BTC', amount: 0.1, price_per_unit: 300000, status: 'OPEN' });
  await TradeOrder.create({ user_id: u2.id, type: 'sell', currency: 'BTC', amount: 0.1, price_per_unit: 300000, status: 'OPEN' });

  console.log('Seed into database');
  process.exit();
}

seed();
