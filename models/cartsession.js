"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class cartSession extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			cartSession.hasMany(models.cartItem);
			cartSession.belongsTo(models.buyer, { through: "buyerId" });
		}
	}
	cartSession.init(
		{
			cartSessionId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			total: DataTypes.DECIMAL(10, 2),
			buyerId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "cartSession",
		}
	);
	return cartSession;
};
