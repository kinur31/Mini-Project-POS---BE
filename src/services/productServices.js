const { getProductQuery } = require("../queries/productQuery")

const getProductService = async () => {
    try {
        const res = await getProductQuery();
        return res;
    } catch (err) {
        throw err;
    }
}



module.exports = {
    getProductService
}