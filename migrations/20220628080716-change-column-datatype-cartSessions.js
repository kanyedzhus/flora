"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */

		await queryInterface.changeColumn("cartSessions", "total", {
			type: Sequelize.DECIMAL(10, 2),
			allowNull: false,
		});
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
		await queryInterface.changeColumn("cartSessions", "total", {
			type: Sequelize.DECIMAL,
			allowNull: false,
		});
	},
};
