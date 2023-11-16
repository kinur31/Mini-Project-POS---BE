const { getProductCategoryQuery } = require("../queries/productCategory");

const getProductCategoryService = async () => {
    try {
        const res = await getProductCategoryQuery();
        return res;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getProductCategoryService
}