module.exports = (sequelize, Sequelize) => {
  const transactionDetail = sequelize.define(
    "transactionDetail",
    {
      transaction_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      qty: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
      },
    },
    {
      timestamps: false,
      tableName: "transaction_details",
    }
  );

  transactionDetail.associate = (models) => {
    transactionDetail.belongsTo(models.transaction, {
      foreignKey: "transaction_id",
      as: "transaction",
    });

    transactionDetail.belongsTo(models.product, {
      foreignKey: "product_id",
      as: "product",
    });
  };

  return transactionDetail;
};
