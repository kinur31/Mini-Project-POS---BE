module.exports = (sequelize, Sequelize) => {
    const products = sequelize.define(
        "products",
        {
            product_name: {
                type: Sequelize.STRING,
            },
            products_category_id: {
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

    // role.associate = (models) => {
    //     role.hasMany(models.user, { foreignKey: "roleId"});
    // };

    return products;
}