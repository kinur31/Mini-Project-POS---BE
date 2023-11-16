const { filterProductQuery, paginationProductQuery } = require("../queries/filterQuery");

const filterProductService = async (product_name, product_category_id, page, pageSize) => {
  try {
    const check = await filterProductQuery({ product_name, product_category_id, page, pageSize });
    if (check.length === 0) throw new Error("No results found");

    return check;
  } catch (err) {
    throw err;
  }
};

const paginationProductService = async (page, pageSize) => {
  try {
    const res = await paginationProductQuery({page, pageSize});
    return res;
} catch (err) {
    throw err;
}
}

module.exports = {
  filterProductService,
  paginationProductService
};
