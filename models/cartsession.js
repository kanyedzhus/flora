'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cartSession extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cartSession.hasMany(models.cartItem)
      cartSession.belongsTo(models.buyer, {through:"buyerId"})
    }
  }
  cartSession.init({
    total: DataTypes.DECIMAL,
    buyerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cartSession',
  });
  return cartSession;
};