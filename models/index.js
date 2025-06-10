const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
require('dotenv').config(); 

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
  }
);

const db = { sequelize, Sequelize };

fs.readdirSync(__dirname)
  .filter(f => f !== 'index.js')
  .forEach(f => {
    const model = require(path.join(__dirname, f))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.values(db).forEach(model => {
  if (model.associate) model.associate(db);
});

module.exports = db;
