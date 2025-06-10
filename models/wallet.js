module.exports = (sequelize, DataTypes) => {
    const Wallet = sequelize.define('Wallet', {
      type: DataTypes.STRING, 
      currency: DataTypes.STRING,
      balance: DataTypes.DECIMAL
    }, {
      tableName: 'wallets',
      underscored: true
    });
  
    Wallet.associate = (models) => {
      Wallet.belongsTo(models.User, { foreignKey: 'user_id' });
  
      Wallet.hasMany(models.Transaction, {
        as: 'OutgoingTransactions',
        foreignKey: 'from_wallet_id'
      });
  
      Wallet.hasMany(models.Transaction, {
        as: 'IncomingTransactions',
        foreignKey: 'to_wallet_id'
      });
    };
  
    return Wallet;
  };