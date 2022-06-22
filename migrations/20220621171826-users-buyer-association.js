'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("buyers", {
      fields: ["userId"],
      type: "foreign key",
      name: "user_buyer_association",
      references:{
        table: "users",
        field: "userId"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeConstraint("buyers", "user_buyer_association")
  }
};
