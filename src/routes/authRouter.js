const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/auth");
const {
  forgotPasswordController,
  loginController,
  keepLoginController,
  resetPasswordController,
} = require("../controller/authController");

router.patch("/forgot-password", forgotPasswordController);
router.post("/login", loginController);
router.get("/keep-login", verifyToken, keepLoginController);
router.patch("/reset-password", resetPasswordController);

module.exports = router;
