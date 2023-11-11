const { createProductservice } = require("../services/productServices");

const createProductController = async (req, res) => {
  try {
    const {
      product_name,
      product_category_id,
      price,
      description,
      stock,
      status_product,
    } = req.body;
    const result = await createProductservice(
      product_name,
      product_category_id,
      price,
      description,
      stock,
      status_product,
      req.file?.filename
    );
    return res.status(200).json({
      message: "Product created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

module.exports = {
  createProductController,
};
