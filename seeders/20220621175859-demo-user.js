'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
   await queryInterface.bulkInsert("users", [
    {"userId":1,
    "userName":"gcrollman0",
    "email":"gcrollman0@ifeng.com",
    "hashedPassword":"ex419kH",
    "firstName":"Garrard",
    "lastName":"Crollman",
    "imgUrl":"https://robohash.org/ullamenimnecessitatibus.png?size=50x50&set=set1",
    "role":"buyer",
    "stripeId":"1",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17",
  },
  {"userId":2,
  "userName":"mryland1",
  "email":"mryland1@imageshack.us",
  "hashedPassword":"Eq365VWLrq",
  "firstName":"Michel",
  "lastName":"Ryland",
  "imgUrl":"https://robohash.org/estinventoreearum.png?size=50x50&set=set1",
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
    await queryInterface.bulkDelete('users', null, {});
  }
};
