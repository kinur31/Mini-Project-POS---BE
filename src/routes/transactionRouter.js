const express = require("express");
const router = express.Router();

const { getTransactionDetailController } = require("../controllers/transactionDetailController");

router.get("/transaction-detail", getTransactionDetailController);

module.exports = router;
