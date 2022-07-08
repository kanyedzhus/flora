"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("orders", {
			orderId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			buyerId: {
				type: Sequelize.INTEGER,
			},

			status: {
				type: Sequelize.STRING,
			},
			total: {
				type: Sequelize.DECIMAL(10, 2),
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
		await queryInterface.dropTable("orders");
	},
};
