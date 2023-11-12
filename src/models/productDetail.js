const db = require("../models");

module.exports = (sequelize, Sequelize) => {
    const productDetail = sequelize.define(
        "productDetail",
        {
            product_id: {
                type: Sequelize.INTEGER
            },
            product_category_id: {
                type: Sequelize.INTEGER
            }
            
        },
        {
            timestamps: false,
            tableName: "product_detail",
        }
    );

    // productDetail.associate = (models) => {
    //     products.belongsToMany(models.productCategory, { through: "product_detail"}),
    //     productCategory.belongsToMany(models.products, { through: "product_detail"})
    // };

    return productDetail;
}