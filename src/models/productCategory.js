module.exports = (sequelize, Sequelize) => {
  const productCategory = sequelize.define(
    "productCategory",
    {
      category_name: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "product_category",
    }
  );

  productCategory.associate = (models) => {
    productCategory.hasMany(models.products, {
      foreignKey: "product_category_id"
    });
  };

  return productCategory;
};