const express = require("express");
const router = express.Router();

const { getProductController } = require("../controllers/productController");
const {
  getProductCategoryController,
} = require("../controllers/productCategoryController");

router.get("/product", getProductController);
router.get("/product-category", getProductCategoryController);

module.exports = router;
