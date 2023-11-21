const { getProductQuery, findProductQuery, createProductQuery, updateProductQuery, deactiveProductQuery, deleteProductQuery, } = require ("../queries/productQuery");

const createProductService = async (
    product_name,
    product_category_id,
    price,
    stock,
    status_product,
    image,
) => {
    try {
        const res = await createProductQuery (
            product_name,
            product_category_id,
            price,
            stock,
            status_product,
            image,
        );
        return res;
    } catch (err) {
        throw err;
    }
};

const getProductService = async () => {
    try {
      const res = await getProductQuery();
      return res;
    } catch (err) {
      throw err;
    }
  };


  const updateProductService = async (
    id,
    product_name,
    product_category_id,
    price,
    stock,
    image,
    status_product
  ) => {
    try {
      const check = await findProductQuery({ id });
      if (!check) {
        throw new Error("Product not found");
      }
  
      await updateProductQuery(id, product_name, product_category_id, price, stock, image, status_product);
  
      // Return something meaningful after updating the product if needed
      return { message: "Product updated successfully" };
    } catch (err) {
      // Rethrow the error to be caught and handled by the calling function
      throw err;
    }
  };
  

const deactiveProductService = async (id) => {
    try {
        const check = await findProductQuery({id});
        if (!check) throw new Error("Product not found");
       await deactiveProductQuery (id);
   
   }  catch (err) {
    throw err
}};

const deleteProductService = async (id) => {
    try {
        const check = await findProductQuery({id});
        if (!check) throw new Error("Categories not found");

       const result = await deleteProductQuery (id);
       
      return result;
  } catch (err) {
    throw err;
  }
};


module.exports = {
    createProductService,
    updateProductService,
    deactiveProductService,
    deleteProductService,
    getProductService,
};
