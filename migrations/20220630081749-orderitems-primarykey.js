"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */

		return queryInterface.changeColumn("orderitems", "orderItemId", {
			type: Sequelize.DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
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
		return queryInterface.changeColumn("orderitems", "oderItemId", {
			type: Sequelize.DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		});
	},
};
