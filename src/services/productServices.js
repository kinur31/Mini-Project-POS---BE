const { createProductQuery } = require ("../queries/productQuery");

const createProductService = async (
    product_name,
    product_category_id,
    price,
    description,
    stock,
    image,
    status_product,
) => {
    try {
        const res = await createProductQuery (
            product_name,
            product_category_id,
            price,
            description,
            stock,
            image,
            status_product, 
        );
        return res;
    } catch (err) {
        throw err;
    }
};


module.exports = {
    createProductService,
}