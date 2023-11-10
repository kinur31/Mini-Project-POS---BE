const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/auth");
const { uploadAvatarFile } = require("../middleware/multer");
const {
  registerController,
  loginController,
  keepLoginController,
} = require("../controller/authController");

router.post("/login", loginController);
router.post("/register", uploadAvatarFile, registerController);
router.get("/keep-login", verifyToken, keepLoginController);

module.exports = router;
