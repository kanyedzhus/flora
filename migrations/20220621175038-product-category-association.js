'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("products", {
      fields: ["categoryId"],
      type: "foreign key",
      name: "category_product_association",
      references:{
        table: "categories",
        field: "categoryId"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("products", "category_product_association")
  }
};
