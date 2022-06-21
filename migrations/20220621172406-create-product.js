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
      productName: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      color: {
        type: Sequelize.STRING
      },
      dimensionsCM: {
        type: Sequelize.INTEGER
      },
      imgURL: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      careDifficulty: {
        type: Sequelize.STRING
      },
      light: {
        type: Sequelize.STRING
      },
      petFriendly: {
        type: Sequelize.BOOLEAN
      },
      airPurifying: {
        type: Sequelize.BOOLEAN
      },
      stripePriceId: {
        type: Sequelize.STRING
      },
      stripeProductId: {
        type: Sequelize.STRING
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