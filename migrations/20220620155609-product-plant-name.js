'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.addColumn("products", "name",{
        type: Sequelize.STRING,
        allowNull: false,
        
      })
    },
  
    async down (queryInterface, Sequelize) {
      await queryInterface.removeColumn("products", "name")
    }
  };
