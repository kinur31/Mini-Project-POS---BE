const {
  createProductService,
  updateProductService,
  deactiveProductService,
  deleteProductService,
  getProductService,
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
    const { product_name, product_category_id, price, stock, status_product } =
      req.body;
     await updateProductService(
      id,
      product_name,
      product_category_id,
      price,
      stock,
      req.file?.filename,
      status_product,
      );

    return res.status(200).json({
      message: "Update product successfully",
    });
  } catch (err) {
    return res.status(500).send(err?.message);
  }
};

const getProductController = async (req, res) => {
  try {
    const result = await getProductService();
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
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

const deleteProductController = async (req, res) => {
  console.log()
  try {
     const { id } = req.params;
     const result = await deleteProductService (id);
     
     return res.status(200).json({
         message: "Delete product successfully",
  })
 } catch (err) {
     return res.status(500).send("Delete product failed");
 }
 }



module.exports = {
  createProductController,
  updateProductController,
  deactiveProductController,
  deleteProductController,
  getProductController,
};
