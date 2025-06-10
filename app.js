require('dotenv').config();
const express = require('express');
const app = express();
const { sequelize } = require('./models');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.use('/users', require('./routes/userRoutes'));
app.use('/wallets', require('./routes/walletRoutes'));
app.use('/orders', require('./routes/tradeOrderRoutes'));
app.use('/matches', require('./routes/tradeMatchRoutes'));
app.use('/transactions', require('./routes/transactionRoutes'));

app.listen(process.env.PORT || 3000, async () => {
  await sequelize.authenticate();
  console.log('Server run at http://localhost:' + (process.env.PORT || 3000));
});
