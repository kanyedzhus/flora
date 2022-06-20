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

  //  {"sellerId":2,
  //  "userId":3,
  //  "storeName":"Plantaholic",
  //  "storeDescription":"Plantaholic is your online garden center featuring a selection of over 100 indoor plants, outdoor plants, and bouquet.",
  //  "createdAt":"2022-01-17",
  //  "updatedAt":"2022-06-17"},

  //  {"sellerId":3,
  //  "userId":5,
  //  "storeName":"Wild Shop",
  //  "storeDescription":"Online nursery shop that provides the best selection of plants and flowers",
  //  "createdAt":"2022-01-17",
  //  "updatedAt":"2022-06-17"},

  //  {"sellerId":4,
  //  "userId":8,
  //  "storeName":"Green Thumb Online",
  //  "storeDescription":"Green Thumb Online is a shop with a collection of high quality plants and wild flowers.",
  //  "createdAt":"2022-01-17",
  //  "updatedAt":"2022-06-17"},
   
  //  {"sellerId":5,
  //  "userId":9,
  //  "storeName":"Gardenly",
  //  "storeDescription":"A online garden shop for people who wish to grow their own plants without the need for a garden and without the expense of a greenhouse.",
  //  "createdAt":"2022-01-17",
  //  "updatedAt":"2022-06-17"}
  ],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sellers", null, {});
}
};