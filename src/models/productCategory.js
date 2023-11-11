module.exports = (sequelize, Sequelize) => {
    const productCategory = sequelize.define(
        "product_category",
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

    // role.associate = (models) => {
    //     role.hasMany(models.user, { foreignKey: "roleId"});
    // };

    return productCategory;
}