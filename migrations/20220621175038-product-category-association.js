'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("product", {
      fields: ["categoryId"],
      type: "foreign key",
      name: "category_product_association",
      references:{
        table: "category",
        field: "categoryId"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("product", "category_product_association")
  }
};
