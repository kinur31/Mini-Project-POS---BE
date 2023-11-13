const { Op, Sequelize } = require("sequelize");
const db = require("../models");
const products = db.products;

const filterProductQuery = async ({
    product_name = null,
}) => {
    console.log(`Data: ${product_name}`)
    try {
        const filter = {};
        if(product_name) {
            filter.product_name = {[Op.like]: `%${product_name}%`}
        }

        const res = await products.findAll({
            include: [
                db.productCategory
            ],
            where: { ...filter }
        })

        return res;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    filterProductQuery
}