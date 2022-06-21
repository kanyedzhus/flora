'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
   await queryInterface.bulkInsert("sellers",[{
    "sellerId":1,
    "userId":2,
    "storeName":"Master Garden",
    "storeDescription":"Master Garden is a place where you can buy garden plants and flowers. A wide range of products are available at affordable prices",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"},

  ],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sellers", null, {});
}
};
