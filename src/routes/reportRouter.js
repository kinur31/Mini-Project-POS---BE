const express = require("express");
const router = express.Router();

const { getReportController } = require("../controllers/reportController");

router.get("/", getReportController);

module.exports = router;
