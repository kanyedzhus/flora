'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("products", {
      fields: ["sellerId"],
      type: "foreign key",
      name: "seller_product_association",
      references:{
        table: "sellers",
        field: "sellerId"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("products", "seller_product_association")
  }
};
