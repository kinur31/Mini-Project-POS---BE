const { filterProductQuery } = require("../queries/filterQuery");

const filterProductService = async (
  product_name,
  product_category_id,
  sortBy,
  page,
  pageSize
) => {
  try {
    const check = await filterProductQuery({
      product_name,
      product_category_id,
      sortBy,
      page,
      pageSize,
    });
    if (check.length === 0) throw new Error("No results found");

    return check;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  filterProductService,
};
