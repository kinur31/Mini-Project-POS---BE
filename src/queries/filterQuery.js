const { Op, Sequelize } = require("sequelize");
const db = require("../models");
const products = db.products;

const filterProductQuery = async ({
    product_name = null,
    product_category_id = null,
}) => {
    console.log(`Data: ${product_name}`)
    try {
        const filter = {};
        if(product_name && product_name !== undefined) {
            filter.product_name = {[Op.like]: `%${product_name}%`}
        }

        if(product_category_id && product_category_id !== "undefined") {
            filter.product_category_id = product_category_id;
        }

        const res = await products.findAll({
            include: [
                db.productCategory
            ],
            where: { ...filter }
        })

        console.log(res);
        return res;

    } catch (err) {
        throw err;
    }
}

const paginationProductQuery = async ({page = null, pageSize = null}) => {
    console.log(page, pageSize)
    try {  
        const res = await products.findAndCountAll({
          include:[db.productCategory],
        limit: pageSize ? +pageSize : 5,
        offset: page ? (page * pageSize) - pageSize : 0,
        })

        return res;
      } catch (err) {
        throw err;
      }
}

module.exports = {
    filterProductQuery,
    paginationProductQuery
}