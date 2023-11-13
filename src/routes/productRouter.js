const express = require("express");
const router = express.Router();

const { getProductController } = require("../controller/productController");

router.get("/", getProductController);

module.exports = router;
