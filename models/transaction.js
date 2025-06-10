module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
      external_address: DataTypes.STRING,
      currency: DataTypes.STRING,
      amount: DataTypes.DECIMAL,
      type: DataTypes.STRING
    }, {
      tableName: 'transactions',
      underscored: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false
    });
  
    Transaction.associate = (models) => {
      Transaction.belongsTo(models.Wallet, {
        foreignKey: 'from_wallet_id',
        as: 'FromWallet'
      });
  
      Transaction.belongsTo(models.Wallet, {
        foreignKey: 'to_wallet_id',
        as: 'ToWallet'
      });
    };
  
    return Transaction;
  };