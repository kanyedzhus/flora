'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buyers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      buyers.belongsTo(models.Users, {through: "userId"})
      buyers.hasOne(models.shopping_session)
      buyers.hasMany(models.orders)
      buyers.hasMany(models.reviews)
    }
  }
  buyers.init({
    userId: DataTypes.INTEGER,
    credits: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'buyers',
  });
  return buyers;
};