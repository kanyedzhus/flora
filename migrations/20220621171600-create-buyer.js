"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("buyers", {
			buyerId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userId: {
				type: Sequelize.INTEGER,
			},
			credit: {
				type: Sequelize.INTEGER,
			},
			stripeId: {
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
		await queryInterface.dropTable("buyers");
	},
};
