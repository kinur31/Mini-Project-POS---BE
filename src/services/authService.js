const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const handlebars = require("handlebars");
const fs = require("fs");

const { keepLoginQuery } = require("../queries/authQuery");
const { findUserQuery } = require("../queries/userQuery");
const transporter = require("../utils/nodemailer");

const forgotPasswordService = async (email) => {
  try {
    const check = await findUserQuery({ email });
    if (!check) throw new Error("Email doesnt exist");

    const temp = await fs.readFileSync(
      path.join(__dirname, "../template", "registration-template.html"),
      "utf-8"
    );

    let payload = {
      id: check.id,
      email: check.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "10s",
    });

    const resetPasswordLink = `${process.env.FE_BASE_URL}/reset-password?token=${token}`;
    console.log(resetPasswordLink);

    const tempCompile = await handlebars.compile(temp);
    const tempResult = tempCompile({
      email: check.email,
      link: resetPasswordLink,
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: check.email,
      subject: "Activation",
      html: tempResult,
    });
  } catch (err) {
    throw err;
  }
};

const resetPasswordService = async (token) => {
  try {
    return "berhasil";
  } catch (err) {
    return "gagal";
  }
};

const loginService = async (username, password) => {
  try {
    const check = await findUserQuery({ username });
    if (!check) throw new Error("Username doesnt exist");

    const isValid = await bcrypt.compare(password, check.password);
    if (!isValid) throw new Error("Password is incorrect");

    let payload = {
      id: check.id,
      email: check.email,
      username: check.username,
      role_id: check.role_id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "1hr",
    });
    return { user: check, token };
  } catch (err) {
    throw err;
  }
};

const keepLoginService = async (id) => {
  try {
    const res = await keepLoginQuery(id);

    if (!res) throw new Error("User doesnt exist");

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  forgotPasswordService,
  resetPasswordService,
  loginService,
  keepLoginService,
};
