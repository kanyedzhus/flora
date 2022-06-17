'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("products", "stripeProductId", 
   { type: Sequelize.STRING });
  },
     

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("products", "stripeProductId")
  }
};
