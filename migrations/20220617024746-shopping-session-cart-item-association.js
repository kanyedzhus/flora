'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addConstraint("cart_items", {
      fields: ["shopping_sessionId"],
      type: "foreign key",
      name: "shopping-session-cart-item-association",
      references:{
        table: "shopping_sessions",
        field: "shopping_sessionId"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeConstraint("cart_items", "shopping-session-cart-item-association")
  }
};
