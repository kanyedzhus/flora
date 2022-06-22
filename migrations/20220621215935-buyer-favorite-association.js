'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("favorites", {
      fields: ["buyerId"],
      type: "foreign key",
      name: "favorite-buyer-association",
      references:{
        table: "buyers",
        field: "buyerId"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("favorites", "favorite-buyer-association")
  }
};
