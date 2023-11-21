const express = require("express");
const router = express.Router();

const {
  createTransactionController,
} = require("../controllers/transactionController");

router.post("/checkout", createTransactionController);

module.exports = router;
