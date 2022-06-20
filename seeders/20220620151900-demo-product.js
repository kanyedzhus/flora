'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface .bulkInsert("products", [{
"productId":1,
"categoryId":4,
"sellerId":1,
"description":"The Ficus Burgundy, or rubber tree, is known for its glossy burgundy leaves and latex sap that was once used in rubber production! This same sap makes the Ficus elastica toxic, so the best practice is to keep it out of the reach of curious pets and small children. Give your Ficus Burgundy plenty of bright indirect light to help it retain its dramatic foliage.",
"color":"Green",
"dimensionsCM":20,
"imgURL":"http://#",
"price":100.00,
"quantity":5,
"careDifficulty":"1",
"light":"Bright Direct",
"petFriendly":false,
"airPurifying":false,
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17",
"stripePriceId":"001",
"stripeProductId":"001",
"name":"Ficus Burgundy"
   }],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});}
  
};
