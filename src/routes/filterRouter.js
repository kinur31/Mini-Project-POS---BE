const express = require("express");
const router = express.Router();

const { findProductController } = require("../controller/filterController");

router.get("/search", findProductController);

module.exports = router;