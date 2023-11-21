const express = require("express");
const router = express.Router();

const {
  createTransactionController,
} = require("../controllers/transactionController");

router.post("/checkout", createTransactionController);
const { getTransactionDetailController } = require("../controllers/transactionDetailController");

router.get("/transaction-detail", getTransactionDetailController);

module.exports = router;
