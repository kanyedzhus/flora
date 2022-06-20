'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "stripeId",{
      type: Sequelize.STRING,
      
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "stripeId")
  }
};
