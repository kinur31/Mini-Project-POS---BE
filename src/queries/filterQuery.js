const { Op, Sequelize } = require("sequelize");
const db = require("../models");
const { count } = require("console");
const products = db.products;

const filterProductQuery = async ({
  product_name = null,
  product_category_id = null,
  page = null,
  pageSize = 10,
}) => {
  console.log(`Data: ${product_name}`);
  try {
    const filter = {};
    if (product_name && product_name !== undefined) {
      filter.product_name = { [Op.like]: `%${product_name}%` };
    }

    if (product_category_id && product_category_id !== "undefined") {
      filter.product_category_id = product_category_id;
    }

    
    const { count, rows: product } = await products.findAndCountAll({
      include: [db.productCategory],
      where: { ...filter },
      limit: pageSize ? +pageSize : 10,
      offset: page ? page * pageSize - pageSize : 0,
    //   totalPage: totalPage,
    });
    
    const totalPage = Math.ceil(count / pageSize)
    console.log(totalPage);
    return {product, totalPage};
  } catch (err) {
    throw err;
  }
};

const paginationProductQuery = async ({ page = null, pageSize = null }) => {
  console.log(page, pageSize);
  try {
    const res = await products.findAndCountAll({
      include: [db.productCategory],
      limit: pageSize ? +pageSize : 5,
      offset: page ? page * pageSize - pageSize : 0,
    });

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  filterProductQuery,
  paginationProductQuery,
};
