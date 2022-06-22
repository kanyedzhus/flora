"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class buyer extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			buyer.belongsTo(models.user, { through: "userId" });
			buyer.hasMany(models.order);
			buyer.hasOne(models.cartSession);
			buyer.hasMany(models.review);
			buyer.hasMany(models.favorite);
		}
	}
	buyer.init(
		{
			buyerId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			userId: DataTypes.INTEGER,
			credit: DataTypes.INTEGER,
			stripeId: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "buyer",
		}
	);
	return buyer;
};
