'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     favorites.belongsToMany(models.buyers, {through: "buyersId"})
     favorites.belongsToMany(models.sellers, {through: "sellersId"})
     favorites.belongsToMany(models.products, {through: "productId"})
    }
  }
  favorites.init({
    buyerId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'favorites',
  });
  return favorites;
};