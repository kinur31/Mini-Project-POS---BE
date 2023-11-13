const { getProductService } = require("../services/productServices");

const getProductController = async (req, res) => {
  try {
    const result = await getProductService();
    return res.status(200).json({
      message: "Success",
      data: result
    })
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getProductController
};
