const express = require("express");
const router = express.Router();

const {
  createCashierController,
  updateCashierController,
  deleteCashierController,
} = require("../controller/userController");
const { checkRoles } = require("../middleware/auth");

router.post("/", checkRoles, createCashierController);
router.patch("/:id", updateCashierController);
router.delete("/:id", deleteCashierController);

module.exports = router;
