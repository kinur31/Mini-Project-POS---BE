module.exports = (sequelize, Sequelize) => {
  const transaction = sequelize.define(
    "transaction",
    {
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
        allowNull: false,
      },
      updatedAt: {
        type: "TIMESTAMP",
        allowNull: false,
      },
    },
    {
      timestamps: true,
      tableName: "transactions",
    }
  );

  transaction.associate = (models) => {
    transaction.hasMany(models.transactionDetail, {
      foreignKey: "transaction_id",
      as: "transactionDetails",
    });
  };

  return transaction;
};
