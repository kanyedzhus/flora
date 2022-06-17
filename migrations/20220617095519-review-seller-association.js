'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("reviews", {
      fields: ["sellerId"],
      type: "foreign key",
      name: "review-seller-association",
      references:{
        table: "sellers",
        field: "sellerId"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("reviews", "review-seller-association")
  }
};
