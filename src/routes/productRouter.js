const express = require("express");
const router = express.Router();

const { getProductController } = require("../controller/productController");
const { getProductCategoryController } = require("../controller/productCategoryController");


router.get("/product", getProductController);
router.get("/product-category", getProductCategoryController);

module.exports = router;
