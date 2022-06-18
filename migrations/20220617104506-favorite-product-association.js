'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("favorites", {
      fields: ["productId"],
      type: "foreign key",
      name: "favorite-product-association",
      references:{
        table: "products",
        field: "productId"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("favorites", "favorite-product-association")
  }
};
