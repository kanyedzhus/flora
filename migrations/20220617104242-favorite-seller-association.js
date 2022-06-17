'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("favorites", {
      fields: ["sellerId"],
      type: "foreign key",
      name: "favorite-seller-association",
      references:{
        table: "sellers",
        field: "sellerId"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("favorites", "favorite-seller-association")
  }
};
