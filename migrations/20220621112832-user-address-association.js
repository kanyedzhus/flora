'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("addresses", {
      fields: ["userId"],
      type: "foreign key",
      name: "user_address_association",
      references:{
        table: "users",
        field: "userId"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },
  

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("addresses", "user_address_association")}
  };
