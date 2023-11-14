const express = require("express");
const router = express.Router();

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
