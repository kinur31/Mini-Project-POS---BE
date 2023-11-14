const express = require("express");
const router = express.Router();

const { uploadProductFile } = require("../middleware/multer");


const {
  createProductController,
  updateProductController,
  deactiveProductController,
  
} = require("../controller/productController");

router.post("/add-product", uploadProductFile, createProductController);
router.patch("/:id", uploadProductFile, updateProductController);
router.patch("/deactive/:id", deactiveProductController);
const {
  createProductCategoryController,
  updateProductCategoryController,
  deleteProductCategoryController,
  getProductCategoryController,
} = require("../controller/productCategoryController");


router.get("/list-category", getProductCategoryController);
router.post("/add-product-category", createProductCategoryController);
router.patch("/:id", updateProductCategoryController);
router.delete("/:id", deleteProductCategoryController);

module.exports = router;
