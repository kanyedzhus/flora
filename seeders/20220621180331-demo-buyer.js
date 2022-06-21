'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert("buyer", [{
      "buyerId":1,"userId":1,"credits":0,
      "createdAt":"2022-01-17",
      "updatedAt":"2022-06-17"},

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("buyer", null, {});
  }
};
