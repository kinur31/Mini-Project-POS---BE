const express = require("express");
const router = express.Router();

const {
  createCashierController,
  updateCashierController,
  deleteCashierController,
} = require("../controller/userController");
const { checkRoles, verifyToken } = require("../middleware/auth");

router.post("/", verifyToken, createCashierController);
router.patch("/:id", updateCashierController);
router.delete("/:id", deleteCashierController);

module.exports = router;
