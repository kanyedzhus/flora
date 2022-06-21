'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      favorite.belongsToMany(models.buyer, {through: "buyersId"})
      favorite.belongsToMany(models.seller, {through: "sellersId"})
      favorite.belongsToMany(models.product, {through: "productId"})
    }
  }
  favorite.init({
    buyerId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'favorite',
  });
  return favorite;
};