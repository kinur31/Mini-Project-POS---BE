const sequelize = require("../models");
const { Op, Sequelize } = require("sequelize");
const db = require("../models");
const products = db.products;

const findProductQuery = async ({id=null}) => {
  try {
      const params = {};
      if (id) params.id = id;
      const res = await products.findOne({
          where: {
              ...params,
          }
      })
      return res;
  } catch (err) {
      throw err;
  }
};

const getProductQuery = async () => {
  try {
    const res = await products.findAll({
      include:[db.productCategory]
    })
    return res;
  } catch (err) {
    throw err;
  }
}

module.exports = {
    findProductQuery,
    getProductQuery,
};