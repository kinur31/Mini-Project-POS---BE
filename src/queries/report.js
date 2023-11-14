const sequelize = require("../models");
const { Op, Sequelize } = require("sequelize");
const db = require("../models");
const reports = db.reports;


const findTransactionQuery = async ({id=null}) => {
  try {
      const params = {};
      if (id) params.id = id;
      const res = await products.findUnique({
          where: { 
            id: id,
            //   ...params,
          },
          include: {
            transactions_detail: {
                include: {
                    product: true,
                }
            },
            user: true,
          }
      })
      return res;
  } catch (err) {
      throw err;
  }
};


const getAllTransactionQuery = async (startDate, endDate) => {
  try {
    const res = await transaction.findMany({
        where: {
            date: {
                gte: new Date(`${startDate}`),
                lte: new Date(`${endDate}`),
            },
        },
        include: {
            transactions_detail: true,
            user: true,
        }
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
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }
};


const updateTransactiontQuery = async (id, total_price, total_qty, product_name, user_id, ) => {
    console.log(id, product_name, product_category_id, price)
  try {
      const res = await products.updateMany(
          {
            total_price, total_qty, product_name, user_id,
          },
          {
              where:{
                  id: id,
              } 
      })

  return res;
} catch (err) {
  throw err;
}
};


const gruopTransactionByDateQuery = async () => {
  try {
      const res = await transaction.grupBy(
          {
           by: ["date"],
           _count: {
            _all: true,
           },
           _sum: {
            total_price: true,
           }
          },
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
    deactiveProductQuery,
    deleteProductQuery,
    getProductQuery,
};