'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("buyer", {
      fields: ["userId"],
      type: "foreign key",
      name: "user_buyer_association",
      references:{
        table: "user",
        field: "userId"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeConstraint("buyer", "user_buyer_association")
  }
};
