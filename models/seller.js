'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      seller.belongsTo(models.user, {through: "userId"})
    }
  }
  seller.init({
    userId: DataTypes.INTEGER,
    storeName: DataTypes.STRING,
    storeDescription: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'seller',
  });
  return seller;
};