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
        productCategory.belongsToMany(models.productDetail, { through: "product_detail"});
    };

    return productCategory;
}