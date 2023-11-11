const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const handlebars = require("handlebars");
const fs = require("fs");

const { registerQuery } = require("../queries/authQuery");
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

    const temp = await fs.readFileSync(
      path.join(__dirname, "../template", "registration-template.html"),
      "utf-8"
    );

    // const activationLink = `${process.env.FE_BASE_URL}/verify?token=${token}`;
    const activationLink = `localhost:8080/verify?token=${token}`;

    const tempCompile = await handlebars.compile(temp);
    const tempResult = tempCompile({ email: res.email, link: activationLink });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: res.email,
      subject: "Activation",
      html: tempResult,
    });

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  registerService,
};
