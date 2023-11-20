module.exports = (sequelize, Sequelize) => {
  const product = sequelize.define(
    "product",
    {
      product_name: {
        type: Sequelize.STRING,
      },
      product_category_id: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.DECIMAL,
      },
      stock: {
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
      },
      status_product: {
        type: Sequelize.BOOLEAN,
      },
    },
    {
      timestamps: false,
      tableName: "products",
    }
  );

  product.associate = (models) => {
    product.belongsTo(models.productCategory, {
      foreignKey: "product_category_id",
      as: "productCategory", // Optional alias for the association
    });

    product.hasMany(models.transactionDetail, {
      foreignKey: "product_id",
      as: "transactionDetails", // Optional alias for the association
    });
  };

  return product;
};
