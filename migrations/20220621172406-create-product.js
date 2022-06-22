"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("products", {
			productId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			categoryId: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			sellerId: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			productName: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			description: {
				allowNull: false,
				type: Sequelize.TEXT,
			},
			imgURL: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			price: {
				allowNull: false,
				type: Sequelize.DECIMAL,
			},
			quantity: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			easyCare: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
			},
			light: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			petFriendly: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
			},
			airPurifying: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
			},
			stripePriceId: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			stripeProductId: {
				allowNull: false,
				type: Sequelize.STRING,
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
		await queryInterface.dropTable("products");
	},
};
