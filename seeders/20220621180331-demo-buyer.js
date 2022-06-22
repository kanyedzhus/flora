"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"buyers",
			[
				{
					buyerId: 1,
					userId: 1,
					credit: 0,
					stripeId: "1",
					createdAt: "2022-01-17",
					updatedAt: "2022-06-17",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("buyers", null, {});
	},
};
