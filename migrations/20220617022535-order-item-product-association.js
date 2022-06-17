'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addConstraint("order_items", {
      fields: ["productId"],
      type: "foreign key",
      name: "order_item_product_association",
      references:{
        table: "products",
        field: "productId"
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
     await queryInterface.removeConstraint("categories", "category_product_association")
  }
};
