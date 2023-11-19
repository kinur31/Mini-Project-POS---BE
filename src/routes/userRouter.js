const express = require("express");
const router = express.Router();

const {
  findCashierByIdController,
  createCashierController,
  updateCashierController,
  deleteCashierController,
  deactiveCashierController,
} = require("../controller/userController");
const { verifyToken, checkRolesAdmin } = require("../middleware/auth");

router.post(
  "/add-cashier",
  verifyToken,
  // checkRolesAdmin,
  createCashierController
);
router.get("/findCashier", findCashierByIdController);
router.patch("/:id", updateCashierController);
router.delete("/:id", deleteCashierController);
router.patch("/deactive/:id", deactiveCashierController);

module.exports = router;
