"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class order extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			order.belongsToMany(models.buyer, { through: "buyerId" });

			order.hasMany(models.orderItem);
		}
	}
	order.init(
		{
			orderId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			buyerId: DataTypes.INTEGER,

			status: DataTypes.STRING,
			total: DataTypes.DECIMAL(10, 2),
		},
		{
			sequelize,
			modelName: "order",
		}
	);
	return order;
};
