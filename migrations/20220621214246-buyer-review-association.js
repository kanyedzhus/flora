'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("reviews", {
      fields: ["buyerId"],
      type: "foreign key",
      name: "review-buyer-association",
      references:{
        table: "buyers",
        field: "buyerId"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("reviews", "review-buyer-association")
  }
};