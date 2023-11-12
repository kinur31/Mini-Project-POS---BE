module.exports = (sequelize, Sequelize) => {
    const products = sequelize.define(
        "products",
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
            description: {
                type: Sequelize.STRING,
            },
            stock: {
                type: Sequelize.INTEGER,
            },
            image: {
                type: Sequelize.STRING,
            },
            status_product: {
                type: Sequelize.BOOLEAN,
            }
        },
        {
            timestamps: false,
            tableName: "products",
        }
    );

    products.associate = (models) => {
        products.belongsToMany(models.productDetail, { through: "product_detail"});
    };

    return products;
}