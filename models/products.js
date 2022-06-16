'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.belongsTo(models.sellers, {through: "sellerId"})
      products.belongsTo(models.categories, {through:"categoryId"})
      products.hasMany(models.cart_items)
    }
  }
  products.init({
    categoryId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    color: DataTypes.STRING,
    dimensionsCM: DataTypes.INTEGER,
    imgURL: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    careDifficulty: DataTypes.STRING,
    light: DataTypes.STRING,
    petFriendly: DataTypes.BOOLEAN,
    airPurifying: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};