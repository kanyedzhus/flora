'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
   await queryInterface.bulkInsert("user", [
    {"userId":1,
    "username":"gcrollman0",
    "email":"gcrollman0@ifeng.com",
    "hashedPassword":"ex419kH",
    "firstName":"Garrard",
    "lastName":"Crollman",
    "imageUrl":"https://robohash.org/ullamenimnecessitatibus.png?size=50x50&set=set1",
    "role":"buyer",
    "stripeId":"1",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17",
  },
  {"userId":2,
  "username":"mryland1",
  "email":"mryland1@imageshack.us",
  "hashedPassword":"Eq365VWLrq",
  "firstName":"Michel",
  "lastName":"Ryland",
  "imageUrl":"https://robohash.org/estinventoreearum.png?size=50x50&set=set1",
  "role":"seller",
  "stripeId":"2",
  "createdAt":"2022-01-17",
  "updatedAt":"2022-06-17",
},
   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user', null, {});
  }
};
