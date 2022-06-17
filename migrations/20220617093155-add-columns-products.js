'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn("products", "stripePriceId", 
   { type: Sequelize.STRING });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn("products", "stripePriceId")
  }
};
