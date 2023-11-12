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

module.exports = router;
