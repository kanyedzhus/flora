"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("cartSessions", {
			cartSessionId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			total: {
				type: Sequelize.DECIMAL(10, 2),
			},
			buyerId: {
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
		await queryInterface.dropTable("cartSessions");
	},
};
