const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { registerQuery, keepLoginQuery } = require("../queries/authQuery");
const { findUserQuery } = require("../queries/userQuery");
const transporter = require("../utils/nodemailer");

const registerService = async (
  fullname,
  address,
  email,
  username,
  password,
  role_id
) => {
  try {
    const check = await findUserQuery({ email, username });

    if (check) throw new Error("Email or username already exist");

    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password, salt);

    let payload = {
      email: email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "1hr",
    });

    const res = await registerQuery(
      fullname,
      address,
      email,
      username,
      hashPassword,
      role_id
    );

    return res;
  } catch (err) {
    throw err;
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
  registerService,
  loginService,
  keepLoginService,
};
