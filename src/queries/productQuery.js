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
        status_product: true,
    });
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }
};

const updateProductQuery = async (id, product_name,
  product_category_id,
  price,
  description,
  stock,
  image) => {
    console.log(id, product_name, product_category_id, price, description)
  try {
      const res = await products.update(
          {
            product_name,
            product_category_id,
            price,
            description,
            stock,
            image
          },
          {
              where:{
                  id: id,
              } 
      })
  console.log(res);
  return res;
} catch (err) {
  throw err;
}
};

const deactiveProductQuery = async (id) => {
  try {
      const res = await products.update(
          {
           status_product: false,
          },
          {
              where:{
                  id: id,
              } 
      })
  console.log(res);
  return res;
} catch (err) {
  throw err;
}
};


module.exports = {
    createProductQuery,
    findProductQuery,
    updateProductQuery,
    deactiveProductQuery,
};