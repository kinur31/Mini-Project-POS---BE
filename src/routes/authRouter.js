import { body } from "express-validator";
const express = require("express");
const router = express.Router();

const { validator } = require("../middleware/validator");
const { verifyToken } = require("../middleware/auth");
const {
  forgotPasswordController,
  loginController,
  keepLoginController,
  resetPasswordController,
} = require("../controller/authController");

const validations = [
  body("email").notEmpty().withMessage("Email cannot be emptied"),
  body("email").isEmail().withMessage("Email format is invalid"),
  body("password").notEmpty().withMessage("Password cannot be emptied"),
];
const emailValid = [
  body("email").notEmpty().withMessage("Email cannot be emptied"),
  body("email").isEmail().withMessage("Email format is invalid"),
];

router.patch(
  "/forgot-password",
  validator(emailValid),
  forgotPasswordController
);
router.post("/login", validator(validations), loginController);
router.get("/keep-login", verifyToken, keepLoginController);
router.patch("/reset-password", resetPasswordController);

module.exports = router;
