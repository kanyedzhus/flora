'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert("categories", [{
    "categoryId":1,
    "categoryName":"Indoor",
    "parentId":null,
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":2,
    "categoryName":"Potted plants",
    "parentId":1,
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":3,
    "categoryName":"Cacti and succulents",
    "parentId":1,
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":4,
    "categoryName":"Outdoor",
    "parentId":null,
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":5,
    "categoryName":"Climbing plants",
    "parentId":4,
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":6,
    "categoryName":"Trees",
    "parentId":4,
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":7,
    "categoryName":"Flowers",
    "parentId":null,
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":8,
    "categoryName":"Bouquet",
    "parentId":7,
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    },
    {"categoryId":9,
    "categoryName":"Dried Flowers",
    "parentId":7,
    "createdAt":"2022-01-17",
    "updatedAt":"2022-06-17"
    }], {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});}
};