'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.belongsToMany(models.seller, {through:"sellerId"})
      order.belongsToMany(models.buyer, {through:"buyerId"})
    }
  }
  order.init({
    buyerId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    invoiceId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    total: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};