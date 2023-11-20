const express = require("express");
const router = express.Router();

const {
  findCashierByIdController,
  createCashierController,
  updateCashierController,
  deleteCashierController,
} = require("../controller/userController");
const { verifyToken, checkRolesAdmin } = require("../middleware/auth");
const { filterCashierController } = require("../controller/filterContoller");

router.post(
  "/add-cashier",
  verifyToken,
  checkRolesAdmin,
  createCashierController
);
router.get("/findCashier", findCashierByIdController);
router.patch("/:id", updateCashierController);
router.delete("/:id", deleteCashierController);
router.get("/", filterCashierController);

module.exports = router;
