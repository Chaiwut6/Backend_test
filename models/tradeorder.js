module.exports = (sequelize, DataTypes) => {
    const TradeOrder = sequelize.define('TradeOrder', {
      type: DataTypes.STRING, 
      currency: DataTypes.STRING,
      amount: DataTypes.DECIMAL,
      price_per_unit: DataTypes.DECIMAL,
      status: DataTypes.STRING
    }, {
      tableName: 'trade_orders',
      underscored: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false
    });
  
    TradeOrder.associate = (models) => {
      TradeOrder.belongsTo(models.User, { foreignKey: 'user_id' });
  
      TradeOrder.hasMany(models.TradeMatch, { foreignKey: 'buy_order_id', as: 'BuyMatches' });
      TradeOrder.hasMany(models.TradeMatch, { foreignKey: 'sell_order_id', as: 'SellMatches' });
    };
  
    return TradeOrder;
  };