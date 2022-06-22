'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // review.belongsToMany(models.buyer, {through:buyerId})
      // review.belongsToMany(models.seller, {through:sellerId})
    }
  }
  review.init({
    reviewId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    buyerId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};