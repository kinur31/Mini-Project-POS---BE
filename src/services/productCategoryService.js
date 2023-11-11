const { createProductCategoryQuery, updateProductCategoryQuery, findProductCategoryQuery, deleteProductCategoryQuery, } = require("../queries/productCategoryQuery");

const createProductCategoryService = async (
    category_name,
) => {
    try {
        const res = await createProductCategoryQuery (
            category_name, 
        );
        return res;
    } catch (err) {
        throw err;
    }
};

const updateProductCategoryService = async (id, category_name ) => {
    try {
        const check = await findProductCategoryQuery({id});
        if (!check) throw new Error("Categories not found");

       const result = await updateProductCategoryQuery (id, category_name);
       
      return result
   
   }  catch (err) {
    throw err
}}

const deleteProductCategoryService = async (id) => {
    try {
        const check = await findProductCategoryQuery({id});
        if (!check) throw new Error("Categories not found");

       const result = await deleteProductCategoryQuery (id);
       
      return result
  } catch (err) {
    throw err;
  }
};


module.exports = { 
    createProductCategoryService,
    updateProductCategoryService,
    deleteProductCategoryService,
    
};