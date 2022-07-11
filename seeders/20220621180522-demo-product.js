"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"products",
			[
				{
					productId: 1,
					categoryId: 4,
					sellerId: 1,
					productName: "Ficus Burgundy",
					description:
						"The Ficus Burgundy, or rubber tree, is known for its glossy burgundy leaves and latex sap that was once used in rubber production! This same sap makes the Ficus elastica toxic, so the best practice is to keep it out of the reach of curious pets and small children. Give your Ficus Burgundy plenty of bright indirect light to help it retain its dramatic foliage.",
					imgURL: "/public/files/1656601090320-Ficus Burgundy.png",
					price: 100.0,
					quantity: 5,
					easyCare: true,
					light: "Bright Direct",
					petFriendly: false,
					airPurifying: false,
					stripePriceId: "001",
					stripeProductId: "001",
					createdAt: "2022-01-17",
					updatedAt: "2022-06-17",
				},
				{
					productId: 2,
					categoryId: 4,
					sellerId: 1,
					productName: "Ficus Burgundy",
					description:
						"The Ficus Burgundy, or rubber tree, is known for its glossy burgundy leaves and latex sap that was once used in rubber production! This same sap makes the Ficus elastica toxic, so the best practice is to keep it out of the reach of curious pets and small children. Give your Ficus Burgundy plenty of bright indirect light to help it retain its dramatic foliage.",
					imgURL: "/public/files/1656601289290-Ficus Burgundy.png",
					price: 100.0,
					quantity: 5,
					easyCare: true,
					light: "Bright Direct",
					petFriendly: false,
					airPurifying: false,
					stripePriceId: "001",
					stripeProductId: "001",
					createdAt: "2022-01-17",
					updatedAt: "2022-06-17",
				},
				{
					productId: 3,
					categoryId: 3,
					sellerId: 1,
					productName: "Tree",
					description:
						"The Ficus Burgundy, or rubber tree, is known for its glossy burgundy leaves and latex sap that was once used in rubber production! This same sap makes the Ficus elastica toxic, so the best practice is to keep it out of the reach of curious pets and small children. Give your Ficus Burgundy plenty of bright indirect light to help it retain its dramatic foliage.",
					imgURL: "/public/files/1656601804877-Fiddle Leaf Fig Tree.png",
					price: 100.0,
					quantity: 5,
					easyCare: true,
					light: "Bright Direct",
					petFriendly: false,
					airPurifying: false,
					stripePriceId: "001",
					stripeProductId: "001",
					createdAt: "2022-01-17",
					updatedAt: "2022-06-17",
				},
				{
					productId: 4,
					categoryId: 4,
					sellerId: 1,
					productName: "Flower",
					description:
						"The Ficus Burgundy, or rubber tree, is known for its glossy burgundy leaves and latex sap that was once used in rubber production! This same sap makes the Ficus elastica toxic, so the best practice is to keep it out of the reach of curious pets and small children. Give your Ficus Burgundy plenty of bright indirect light to help it retain its dramatic foliage.",
					imgURL: "/public/files/1656602027333-Peony.png",
					price: 100.0,
					quantity: 5,
					easyCare: true,
					light: "Bright Direct",
					petFriendly: false,
					airPurifying: false,
					stripePriceId: "001",
					stripeProductId: "001",
					createdAt: "2022-01-17",
					updatedAt: "2022-06-17",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("products", null, {});
	},
};
