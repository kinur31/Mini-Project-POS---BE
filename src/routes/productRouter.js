const express = require("express");
const router = express.Router();

const {
  createProductCategoryController,
  updateProductCategoryController,
  deleteProductCategoryController,
} = require("../controller/productCategoryController");

router.post("/add-product-category", createProductCategoryController);
router.patch("/:id", updateProductCategoryController);
router.delete("/:id", deleteProductCategoryController);

module.exports = router;
