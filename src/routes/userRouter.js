const express = require("express");
const router = express.Router();

const {
  findCashierByIdController,
  createCashierController,
  updateCashierController,
  deleteCashierController,
  deactiveCashierController,
} = require("../controller/userController");
const { checkRoles, verifyToken } = require("../middleware/auth");

router.post("/", verifyToken, checkRoles, createCashierController);
router.get("/findCashier", findCashierByIdController);
router.patch("/:id", updateCashierController);
router.delete("/:id", deleteCashierController);
router.patch("/deactive/:id", deactiveCashierController);

module.exports = router;
