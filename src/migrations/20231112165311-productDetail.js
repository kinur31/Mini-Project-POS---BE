'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("product_detail", {
      product_id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    product_category_id: {
      allowNull: false,
      // autoIncrement: true,
      primaryKey: true,
        type: Sequelize.INTEGER
    }
    });
  },

  async down(queryInterface, Sequelize) {
    
    
     await queryInterface.dropTable('product_detail');
     
  },
};

