const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const { validator } = require("../middleware/validator");
const { verifyToken } = require("../middleware/auth");
const {
  forgotPasswordController,
  loginController,
  keepLoginController,
  resetPasswordController,
} = require("../controller/authController");

const validations = [
  body("username")
    .notEmpty()
    .withMessage("Username cannot be empty")
    .withMessage("Invalid username format"),
  body("password").notEmpty().withMessage("Password cannot be empty"),
];

const emailValidations = [
  body("email")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .withMessage("Invalid email format"),
];

router.patch(
  "/forgot-password",
  validator(emailValidations),
  forgotPasswordController
);
router.post("/login", validator(validations), loginController);
router.get("/keep-login", verifyToken, keepLoginController);
router.patch("/reset-password", resetPasswordController);

module.exports = router;
