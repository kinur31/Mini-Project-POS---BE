const sequelize = require("../models");
const { Op, Sequelize } = require("sequelize");
// const products = db.products;

const createProductQuery = async (
    product_name,
    product_category_id,
    price,
    description,
    stock,
    image,
    status_product,
) => {
    try {
    const res = await products.create({
        product_name,
        product_category_id,
        price,
        description,
        stock,
        image,
        status_product, 
    });
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
    createProductQuery
};