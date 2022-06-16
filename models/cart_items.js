'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     cart_items.belongsTo(models.products, { through: "productId"})
     cart_items.belongsToMany(models.shopping_session, {through: "shopping_sessionId"})
    }
  }
  cart_items.init({
    shopping_sessionId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cart_items',
  });
  return cart_items;
};