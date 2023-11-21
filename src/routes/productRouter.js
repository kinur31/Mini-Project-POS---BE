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
const { uploadProductFile, uploadAvatarFile } = require("../middleware/multer");

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
router.delete("/ignore/:id", deleteProductController);
router.patch("/edit/:id", uploadProductFile, updateProductController);
router.get("/list-product", getProductController);

module.exports = router;
