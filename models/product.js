"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			product.belongsTo(models.seller, { through: "sellerId" });
			product.belongsTo(models.category, { through: "categoryId" });
			product.hasMany(models.cartItem);
			product.hasMany(models.orderItem);
			product.hasMany(models.favorite);
		}
	}
	product.init(
		{
			productId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			categoryId: DataTypes.INTEGER,
			sellerId: DataTypes.INTEGER,
			productName: DataTypes.STRING,
			description: DataTypes.TEXT,
			imgURL: DataTypes.STRING,
			price: DataTypes.DECIMAL,
			quantity: DataTypes.INTEGER,
			easyCare: DataTypes.BOOLEAN,
			light: DataTypes.STRING,
			petFriendly: DataTypes.BOOLEAN,
			airPurifying: DataTypes.BOOLEAN,
			stripePriceId: DataTypes.STRING,
			stripeProductId: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "product",
		}
	);
	return product;
};
