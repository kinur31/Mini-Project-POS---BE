const express = require("express");
const router = express.Router();

const {
  createProductCategoryController,
  updateProductCategoryController,
  deleteProductCategoryController,
  getProductCategoryController,
} = require("../controller/productCategoryController");
const { createProductController } = require("../controller/productController");
const { uploadProductFile } = require("../middleware/multer");


router.post("/add-product", uploadProductFile, createProductController)
 
router.get("/list-category", getProductCategoryController);
router.post("/add-product-category", uploadProductFile, createProductCategoryController);
router.patch("/:id", updateProductCategoryController);
router.delete("/:id", deleteProductCategoryController);

module.exports = router;
