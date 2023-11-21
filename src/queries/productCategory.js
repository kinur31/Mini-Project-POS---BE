const sequelize = require("../models");
const { Op, Sequelize } = require("sequelize");
const db = require("../models");
const productCategory = db.productCategory;

const getProductCategoryQuery = async () => {
  try {
    const res = await productCategory.findAll();
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getProductCategoryQuery,
};
