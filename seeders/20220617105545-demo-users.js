'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("Users", [
    {"Id":1,
    "username":"gcrollman0",
    "email":"gcrollman0@ifeng.com",
    "hashedPassword":"ex419kH",
    "firstName":"Garrard",
    "lastName":"Crollman",
    "imageUrl":"https://robohash.org/ullamenimnecessitatibus.png?size=50x50&set=set1",
    "role":"buyer",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
  },
  {"Id":2,
  "username":"mryland1",
  "email":"mryland1@imageshack.us",
  "hashedPassword":"Eq365VWLrq",
  "firstName":"Michel",
  "lastName":"Ryland",
  "imageUrl":"https://robohash.org/estinventoreearum.png?size=50x50&set=set1",
  "role":"seller",
  "createdAt":"2022-01-17",
  "updatedAt":"2022-06-17"},
  {"Id":3,
  "username":"socheltree2",
  "email":"socheltree2@imdb.com",
  "hashedPassword":"wU1157i32sP",
  "firstName":"Saunder",
  "lastName":"Ocheltree",
  "imageUrl":"https://robohash.org/recusandaevelitdeleniti.png?size=50x50&set=set1",
  "role":"seller",
  "createdAt":"2022-01-17",
  "updatedAt":"2022-06-17"},
{"Id":4,
"username":"lruggier3",
"email":"lruggier3@phoca.cz",
"hashedPassword":"jzC0jr3E4W",
"firstName":"Leontyne",
"lastName":"Ruggier",
"imageUrl":"https://robohash.org/adipiscietesse.png?size=50x50&set=set1",
"role":"buyer",
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},
{"Id":5,
"username":"sheardman4",
"email":"sheardman4@walmart.com",
"hashedPassword":"uz40UOQHxQ0Q",
"firstName":"Salli",
"lastName":"Heardman",
"imageUrl":"https://robohash.org/numquamdebitisrepellat.png?size=50x50&set=set1",
"role":"seller",
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},
{"Id":6,
"username":"pkynton5",
"email":"pkynton5@slideshare.net",
"hashedPassword":"iIvPbpdCVWG1",
"firstName":"Paige",
"lastName":"Kynton",
"imageUrl":"https://robohash.org/iustobeataeanimi.png?size=50x50&set=set1",
"role":"buyer",
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},
{"Id":7,
"username":"fparrish6",
"email":"fparrish6@paginegialle.it",
"hashedPassword":"xmvClIq5iMby",
"firstName":"Fiorenze",
"lastName":"Parrish"
,"imageUrl":"https://robohash.org/accusamusistefugiat.png?size=50x50&set=set1",
"role":"buyer",
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},
{"Id":8,
"username":"rcisson7",
"email":"rcisson7@google.co.jp",
"hashedPassword":"kxp8W0",
"firstName":"Reynard",
"lastName":"Cisson",
"imageUrl":"https://robohash.org/inciduntetaut.png?size=50x50&set=set1",
"role":"seller",
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},
{"Id":9,
"username":"oalcorn8",
"email":"oalcorn8@google.co.jp",
"hashedPassword":"0PVBjcJ31hKn",
"firstName":"Otho","lastName":"Alcorn",
"imageUrl":"https://robohash.org/quiavelvelit.png?size=50x50&set=set1",
"role":"seller",
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"},
{"Id":10,
"username":"cduplantier9",
"email":"cduplantier9@tamu.edu",
"hashedPassword":"e9isMt3xNoB",
"firstName":"Candis",
"lastName":"Du Plantier",
"imageUrl":"https://robohash.org/facilistotamqui.png?size=50x50&set=set1",
"role":"buyer",
"createdAt":"2022-01-17",
"updatedAt":"2022-06-17"}

   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
