'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert("category", [{
    "categoryId":1,
    "parentId":null,
    "categoryName":"Indoor",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":2,
    "parentId":1,
    "categoryName":"Potted plants",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":3,
    "parentId":1,
    "categoryName":"Cacti and succulents",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":4,
    "parentId":null,
    "categoryName":"Outdoor",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":5,
    "parentId":4,
    "categoryName":"Climbing plants",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":6,
    "parentId":4,
    "categoryName":"Trees",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":7,
    "parentId":null,
    "categoryName":"Flowers",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":8,
    "parentId":7,
    "categoryName":"Bouquet",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":9,
    "parentId":7,
    "categoryName":"Dried Flowers",
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    }], {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("category", null, {});}
};