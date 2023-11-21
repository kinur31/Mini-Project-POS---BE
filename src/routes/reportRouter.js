const express = require("express");
const router = express.Router();

const { getReportController, getAllReportController, } = require("../controllers/reportController");

router.get("/", getReportController);
router.get("/all", getAllReportController);

module.exports = router;
