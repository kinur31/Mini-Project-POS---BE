const { Op } = require("sequelize");
const db = require("../models");
const products = db.product;

const filterProductQuery = async ({
  product_name = null,
  product_category_id = null,
  sortBy = null,
  page = null,
  pageSize = 10,
}) => {
  try {
    const filter = {
      ...(product_name && { product_name: { [Op.like]: `%${product_name}%` } }),
      ...(product_category_id && { product_category_id }),
    };

    const orderOptions = {
      name_asc: [["product_name", "ASC"]],
      name_desc: [["product_name", "DESC"]],
      price_asc: [["price", "ASC"]],
      price_desc: [["price", "DESC"]],
    };

    const order = orderOptions[sortBy];

    const { count, rows: product } = await products.findAndCountAll({
      include: [db.productCategory],
      where: filter,
      order,
      limit: pageSize ? +pageSize : 10,
      offset: page ? page * pageSize - pageSize : 0,
    });

    const totalPage = Math.ceil(count / pageSize);
    return { product, totalPage };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  filterProductQuery,
};
