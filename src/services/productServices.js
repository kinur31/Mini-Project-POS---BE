const { findProductQuery, createProductQuery, updateProductQuery, deactiveProductQuery, } = require ("../queries/productQuery");

const createProductService = async (
    product_name,
    product_category_id,
    price,
    stock,
    image,
    status_product,
) => {
    try {
        const res = await createProductQuery (
            product_name,
            product_category_id,
            price,
            stock,
            image,
            status_product,
        );
        return res;
    } catch (err) {
        throw err;
    }
};

const updateProductService = async (id, product_name,
    product_category_id,
    price,
    stock,
    image) => {
    try {
        const check = await findProductQuery({id});
        if (!check) throw new Error("Product not found");

       await updateProductQuery (id, product_name,
        product_category_id,
        price,
        stock,
        image);
   
   }  catch (err) {
    throw err
}};

const deactiveProductService = async (id) => {
    try {
        const check = await findProductQuery({id});
        if (!check) throw new Error("Product not found");
       await deactiveProductQuery (id);
   
   }  catch (err) {
    throw err
}};
module.exports = {
    createProductService,
    updateProductService,
    deactiveProductService,
}