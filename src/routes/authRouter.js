const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/auth");
const {
  loginController,
  keepLoginController,
} = require("../controller/authController");

router.post("/login", loginController);
router.get("/keep-login", verifyToken, keepLoginController);

module.exports = router;
