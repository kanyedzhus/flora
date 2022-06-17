// 'use strict';

// module.exports = {
//   async up (queryInterface, Sequelize) {
//     await queryInterface.addConstraint("sellers", {
//       fields: ["userId"],
//       type: "foreign key",
//       name: "users_sellers_association",
//       references:{
//         table: "Users",
//         field: "id"
//       },
//       onUpdate: "CASCADE",
//       onDelete: "SET NULL",
//     })
//   },
  

//   async down (queryInterface, Sequelize) {
//     await queryInterface.removeConstraint("sellers", "users_sellers_association")
  
//   }
// };
