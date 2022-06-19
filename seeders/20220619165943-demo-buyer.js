'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert("buyers", [{
      "buyerId":1,"userId":1,"credit":0,
      "createdAt":"2022-01-17",
      "updatedAt":"2022-06-17"},
{"buyerId":2,"userId":4,"credit":0,
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},
{"buyerId":3,"userId":6,"credit":2,
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},
{"buyerId":4,"userId":7,"credit":5,
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},
{"buyerId":5,"userId":10,"credit":1,
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"
       
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sellers", null, {});
  }
};
