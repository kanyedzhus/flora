'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.addConstraint("sellers", {
      fields: ["userId"],
      type: "foreign key",
      name: "user_seller_association",
      references:{
        table: "users",
        field: "userId"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.removeConstraint("sellers", "user_seller_association")
  }
};
