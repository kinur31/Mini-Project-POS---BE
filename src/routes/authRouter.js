const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/auth");
const {
  forgotPasswordController,
  loginController,
  keepLoginController,
  resetPasswordController,
} = require("../controller/authController");

router.post("/forgot-password", forgotPasswordController);
router.post("/login", loginController);
router.get("/keep-login", verifyToken, keepLoginController);
router.get("forgot-password:token", resetPasswordController);

module.exports = router;
