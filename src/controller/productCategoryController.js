const { getProductCategoryService } = require("../services/productCategory");

const getProductCategoryController = async (req, res) => {
  try {
    const result = await getProductCategoryService();
    return res.status(200).json({
      message: "Success",
      data: result
    })
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getProductCategoryController
};
