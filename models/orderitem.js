"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class orderItem extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			orderItem.belongsToMany(models.order, { through: "orderId" });
			// orderItem.belongsToMany(models.product, { through: "productId" });
		}
	}
	orderItem.init(
		{
			oderItemId: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			orderId: DataTypes.INTEGER,
			productId: DataTypes.INTEGER,
			quantity: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "orderItem",
		}
	);
	return orderItem;
};
