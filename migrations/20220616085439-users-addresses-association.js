'use strict';

// const { FOREIGNKEYS } = require("sequelize/types/query-types");

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint("addresses", {
      fields: ["userId"],
      type: "foreign key",
      name: "users_addresses_association",
      references:{
        table: "Users",
        field: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
   await queryInterface.removeConstraint("address", "users_addresses_association")
  }
};
