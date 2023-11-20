const { Op } = require("sequelize");
const db = require("../models");
const products = db.product;

const filterCashierQuery = async ({ fullname = null }) => {
  try {
    const filter = {
      ...(fullname && { fullname: { [Op.like]: `%${fullname}%` } }),
    };

    const orderOptions = {
      name_asc: [["fullname", "ASC"]],
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
