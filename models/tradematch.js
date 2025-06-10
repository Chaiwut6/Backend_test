module.exports = (sequelize, DataTypes) => {
    const TradeMatch = sequelize.define('TradeMatch', {
      amount: DataTypes.DECIMAL,
      price: DataTypes.DECIMAL
    }, {
      tableName: 'trade_matches',
      underscored: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false
    });
  
    TradeMatch.associate = (models) => {
      TradeMatch.belongsTo(models.TradeOrder, {
        foreignKey: 'buy_order_id',
        as: 'BuyOrder'
      });
  
      TradeMatch.belongsTo(models.TradeOrder, {
        foreignKey: 'sell_order_id',
        as: 'SellOrder'
      });
    };
  
    return TradeMatch;
  };