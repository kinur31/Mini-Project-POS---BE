const {
  createProductService,
  updateProductService,
  deactiveProductService,
} = require("../services/productServices");

const createProductController = async (req, res) => {
  try {
    const {
      product_name,
      product_category_id,
      price,
      stock,
      status_product,
    } = req.body;
    console.log(product_name)
    const result = await createProductService(
      product_name,
      product_category_id,
      price,
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

const updateProductController = async (req, res) => {
  console.log();
  try {
    const { id } = req.params;
    const { product_name, product_category_id, price, stock } =
      req.body;
     await updateProductService(
      id,
      product_name,
      product_category_id,
      price,
      stock,
      req.file?.filename
    );

    return res.status(200).json({
      message: "Update product successfully",
    });
  } catch (err) {
    return res.status(500).send(err?.message);
  }
};


const deactiveProductController = async (req, res) => {
  try {
    const { id } = req.params;
     await deactiveProductService(
      id);

    return res.status(200).json({
      message: "Deactive product successfully",
    });
  } catch (err) {
    return res.status(500).send(err?.message);
  }
};
module.exports = {
  createProductController,
  updateProductController,
  deactiveProductController,
};
