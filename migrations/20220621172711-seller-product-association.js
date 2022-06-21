'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("product", {
      fields: ["sellerId"],
      type: "foreign key",
      name: "seller_product_association",
      references:{
        table: "seller",
        field: "sellerId"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("product", "seller_product_association")
  }
};
