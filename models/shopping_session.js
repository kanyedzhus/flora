'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shopping_session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      shopping_sessions.hasMany(models.cart_items)// define association here
      shopping_session.belongsTo(models.buyers)
    }
  }
  shopping_session.init({
    total: DataTypes.DECIMAL,
    buyerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'shopping_session',
  });
  return shopping_session;
};