const db = require("../models");
const sequelize = require("../models");
const { Op, Sequelize } = require("sequelize");
const productCategory = db.productCategory;

const findProductCategoryQuery = async ({id=null}) => {
    try {
        const params = {};
        if (id) params.id = id;
        const res = await productCategory.findOne({
            where: {
                ...params,
            }
        })
        return res;
    } catch (err) {
        throw err;
    }
};

const getProductCategoryQuery = async () => {
    try {
      const res = await productCategory.findAll();
      return res;
    } catch (err) {
      throw err;
    }
  };

const createProductCategoryQuery = async (
    category_name,
) => {
    try {
    const res = await productCategory.create({
        category_name, 
    });
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }
};

const updateProductCategoryQuery = async (id, category_name) => {
    try {
        const res = await productCategory.update(
            {
                category_name
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

const deleteProductCategoryQuery = async (id) => {
    try {
        const res = await productCategory.destroy(
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
    getProductCategoryQuery,
    createProductCategoryQuery,
    updateProductCategoryQuery,
    findProductCategoryQuery,
    deleteProductCategoryQuery,
};