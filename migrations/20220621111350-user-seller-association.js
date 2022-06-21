'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.addConstraint("seller", {
      fields: ["userId"],
      type: "foreign key",
      name: "user_seller_association",
      references:{
        table: "user",
        field: "userId"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.removeConstraint("seller", "user_seller_association")
  }
};
