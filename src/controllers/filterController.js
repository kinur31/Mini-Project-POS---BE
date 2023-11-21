const {
  filterProductService,
} = require("../services/filterService");

const filterProductController = async (req, res) => {
  try {
    const { productName, productCategory, sortBy, page, pageSize } = req.query;
    const result = await filterProductService(
      productName,
      productCategory,
      sortBy,
      page,
      pageSize
    );

    return res.status(200).json({
      message: "Success",
      data: result.product,
      totalPage: result.totalPage,
    });
  } catch (err) {
    return res.status(500).send(err?.message);
  }
};

module.exports = {
  filterProductController,
};
