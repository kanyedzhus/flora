'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("address", {
      fields: ["userId"],
      type: "foreign key",
      name: "user_address_association",
      references:{
        table: "user",
        field: "userId"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },
  

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("address", "user_address_association")}
  };
