'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("addresses",
    [{"addressId":1,
    "userId":1,
    "line1":"4420 Oxford Avenue",
    "city":"Zamora",
    "postalCode":"49003",
    "country":"Spain",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17" },
{"addressId":2,
"userId":2,
"line1":"6945 Kingsford Road",
"city":"Ferrol",
"postalCode":"15490",
"country":"Spain",
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},

],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("addresses", null, {});
  }
};