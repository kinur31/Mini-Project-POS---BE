const sequelize = require("../models");
const { Op, Sequelize } = require("sequelize");
const db = require("../models");
const products = db.product;


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
      include: [db.productCategory],
  });
    
    return res;
  } catch (err) {
    throw err;
  }
};


const createProductQuery = async (
    product_name,
    product_category_id,
    price,
    stock,
    status_product,
    image,
) => {
    try {
    const res = await products.create({
        product_name,
        product_category_id,
        price,
        stock,
        status_product: true,
        image,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const updateProductQuery = async (
  id,
  product_name,
  product_category_id,
  price,
  stock,
  image,
  status_product
) => {
  try {
    // if (image !== undefined) data.image = image;
    const res = await products.update(
      {
        product_name,
        product_category_id,
        price,
        stock,
        image,
        status_product,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return res; // Sequelize's update method returns the number of affected rows
  } catch (err) {
    throw err;
  }
};


const statusProductQuery = async (id) => {
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


const deleteProductQuery = async (id) => {
  try {
      const res = await products.destroy(
          {
              where:{
                  id: id,
              } 
      });
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
    statusProductQuery,
    deleteProductQuery,
    getProductQuery,
};
