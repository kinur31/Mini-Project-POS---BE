const express = require("express");
const router = express.Router();

const { filterProductController, paginationProductController } = require("../controller/filterController");

router.get("/", filterProductController);
router.get("/search", filterProductController);
router.get("/pagination", paginationProductController)

module.exports = router;