const express = require("express");
const router = express.Router();

//Product Category
const {
  createProductCategoryController,
  updateProductCategoryController,
  deleteProductCategoryController,
  getProductCategoryController,
} = require("../controller/productCategoryController");

//product
const {
  createProductController,
  deleteProductController,
  updateProductController,
  getProductController,
} = require("../controller/productController");
const { uploadProductFile } = require("../middleware/multer");

//Product Category
router.get("/list-category", getProductCategoryController);
router.post(
  "/add-product-category",
  uploadProductFile,
  createProductCategoryController
);
router.patch("/:id", updateProductCategoryController);
router.delete("/destroy/:id", deleteProductCategoryController);

//Product
router.post("/add-product", uploadProductFile, createProductController);
router.delete("/delete/:id", deleteProductController);
router.patch("/:id", updateProductController);
router.get("/list-product", getProductController);

module.exports = router;
