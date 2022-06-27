"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("cartItems", {
			cartItemId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			cartSessionId: {
				type: Sequelize.INTEGER,
			},
			productId: {
				type: Sequelize.INTEGER,
			},
			price: {
				type: Sequelize.DECIMAL,
			},
			stripePriceId: {
				type: Sequelize.STRING,
			},
			quantity: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("cartItems");
	},
};
