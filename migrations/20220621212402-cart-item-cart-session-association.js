'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addConstraint("cartItems", {
      fields: ["cartSessionId"],
      type: "foreign key",
      name: "cart-item-cart-session-association",
      references:{
        table: "cartSessions",
        field: "cartSessionId"
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
     await queryInterface.removeConstraint("cartItems", "cart-item-cart-session-association")
  }
};