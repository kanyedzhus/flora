'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      productId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoryId: {
        type: Sequelize.INTEGER
      },
      sellerId: {
        type: Sequelize.INTEGER
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      color: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dimensionsCM: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      imgURL: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      careDifficulty: {
        allowNull: false,
        type: Sequelize.STRING
      },
      light: {
        allowNull: false,
        type: Sequelize.STRING
      },
      petFriendly: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      airPurifying: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};