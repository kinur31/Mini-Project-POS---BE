const { createProductCategoryService, updateProductCategoryService, deleteProductCategoryService, } = require ("../services/productCategoryService");

const createProductCategoryController = async (req, res) => {
    try {
      const {
        category_name,
      } = req.body;
      const result = await createProductCategoryService(
        category_name,
      );
      return res.status(200).json({
        message: "Product created successfully",
        data: result,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send(err.message);
    }
  };

  const updateProductCategoryController = async (req, res) => {
    console.log()
    try {
       const { id } = req.params;
       const { category_name } = req.body;
       const result = await updateProductCategoryService (id, category_name);
       
       return res.status(200).json({
           message: "Update category successfully",
    })
   } catch (err) {
       return res.status(500).send("Update product category failed");
   }
   };

   const deleteProductCategoryController = async (req, res) => {
    console.log()
    try {
       const { id } = req.params;
       const result = await deleteProductCategoryService (id);
       
       return res.status(200).json({
           message: "Delete product category successfully",
    })
   } catch (err) {
       return res.status(500).send("Delete product category failed");
   }
   }
  
  module.exports = {
    createProductCategoryController,
    updateProductCategoryController,
    deleteProductCategoryController,
  };
  