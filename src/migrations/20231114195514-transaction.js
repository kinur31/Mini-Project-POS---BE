"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("transactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cashier_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_qty: {
        type: Sequelize.INTEGER,
      },
      total_price: {
        type: Sequelize.DECIMAL(10, 2),
      },
      payment_amount: {
        type: Sequelize.DECIMAL(10, 2),
      },
      payment_change: {
        type: Sequelize.DECIMAL(10, 2),
      },
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
