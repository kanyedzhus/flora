'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("addresses",
    [{"addressId":21,
    "userId":1,
    "line1":"4420 Oxford Avenue",
    "city":"Zamora",
    "postCode":"49003",
    "country":"Spain",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17" },
{"addressId":22,
"userId":2,
"line1":"6945 Kingsford Road",
"city":"Ferrol",
"postCode":"15490",
"country":"Spain",
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},
{"addressId":23,
"userId":3,
"line1":"45536 Graceland Hill",
"city":"Eindhoven",
"postCode":"5609",
"country":"Netherlands",
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},
{"addressId":24,
"userId":4,
"line1":"0322 Chinook Parkway",
"city":"Leeuwarden",
"postCode":"8914",
"country":"Netherlands",
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},
{"addressId":25,
"userId":5,
"line1":"05 Upham Street",
"city":"Kerkrade",
"postCode":"6464",
"country":"Netherlands",
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},
{"addressId":26,
"userId":6,
"line1":"526 Kings Parkway",
"city":"London",
"postCode":"WC2H",
"country":"United Kingdom",
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},
{"addressId":27,
"userId":7,
"line1":"2 Arrowood Road",
"city":"Vlissingen",
"postCode":"4384",
"country":"Netherlands",
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},
{"addressId":28,
"userId":8,
"line1":"27 Elgar Alley",
"city":"Hospitalet De Llobregat, L'",
"postCode":"08904",
"country":"Spain",
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},
{"addressId":29,
"userId":9,
"line1":"218 Johnson Street",
"city":"Madrid",
"postCode":"28025",
"country":"Spain",
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},
{"addressId":30,
"userId":10,
"line1":"07808 Anniversary Center",
"city":"Leiden",
"postCode":"2309",
"country":"Netherlands",
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"}])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("addresses", null, {});
  }
};
