'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert("categories", [{
    "categoryId":1,
    "parentId":1,
    "categoryName":"Indoor",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":2,
    "parentId":null,
    "categoryName":"Potted plants",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":3,
    "parentId":null,
    "categoryName":"Cacti and succulents",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":4,
    "parentId":1,
    "categoryName":"Outdoor",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":5,
    "parentId":null,
    "categoryName":"Climbing plants",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":6,
    "parentId":null,
    "categoryName":"Trees",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":7,
    "parentId":1,
    "categoryName":"Flowers",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":8,
    "parentId":null,
    "categoryName":"Bouquet",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":9,
    "parentId":null,
    "categoryName":"Dried Flowers",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    }], {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});}
};
