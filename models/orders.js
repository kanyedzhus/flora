'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orders.belongsToMany(models.sellers, {through:"sellerId"})
      orders.belongsToMany(models.buyers, {through:"buyerId"})
      orders.hasMany(models.order_items)
    }
  
  }
  orders.init({
    buyerId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    invoiceId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    total: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};