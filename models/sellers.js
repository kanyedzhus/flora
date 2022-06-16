'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sellers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      sellers.belongsto(models.Users, {through: "userId"})
      sellers.hasMany(models.products)
      sellers.hasMany(models.orders)
      sellers.hasMany(models.reviews)
    }
  }
  sellers.init({
    userId: DataTypes.INTEGER,
    storeName: DataTypes.STRING,
    storeDescription: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'sellers',
  });
  return sellers;
};