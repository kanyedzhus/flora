'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert("buyers", [{
      "buyerId":1,"userId":1,"credits":0,
      "createdAt":"2022-01-17",
      "updatedAt":"2022-06-17"},
// {"buyerId":2,"userId":4,"credits":0,
// "createdAt":"2022-01-17",
// "updatedAt":"2022-06-17"},
// {"buyerId":3,"userId":6,"credits":2,
// "createdAt":"2022-01-17",
// "updatedAt":"2022-06-17"},
// {"buyerId":4,"userId":7,"credits":5,
// "createdAt":"2022-01-17",
// "updatedAt":"2022-06-17"},
// {"buyerId":5,"userId":10,"credits":1,
// "createdAt":"2022-01-17",
// "updatedAt":"2022-06-17"  }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sellers", null, {});
  }
};
