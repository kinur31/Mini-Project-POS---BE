const { filterProductQuery } = require("../queries/filterQuery");

const filterProductService = async (product_name) => {
  try {
    const check = await filterProductQuery({ product_name });
    if (!check) throw new Error("Product doesn't exist");

    return check;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  filterProductService,
};
