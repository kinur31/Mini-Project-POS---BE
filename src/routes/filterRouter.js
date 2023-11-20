const express = require("express");
const router = express.Router();
const { filterProductController } = require("../controller/filterController");

router.get("/", filterProductController);
router.get("/search", filterProductController);

module.exports = router;



