const db = require("../models");
const { Op } = require("sequelize");
const users = db.users;

const loginQuery = async (username) => {
  try {
    const res = await users.findOne({
      where: {
        username,
      },
    });

    return res;
  } catch (err) {
    throw err;
  }
};

const keepLoginQuery = async (id) => {
  try {
    const res = await users.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
    });

    return res;
  } catch (err) {
    throw err;
  }
};

const forgotPasswordQuery = async (email, token) => {
  try {
    const res = await users.update({ token }, { where: { email } });

    return res;
  } catch (err) {
    throw err;
  }
};

const resetPasswordQuery = async (email, password) => {
  try {
    const res = await users.update(
      { password, token: null },
      { where: { email } }
    );

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  resetPasswordQuery,
  forgotPasswordQuery,
  loginQuery,
  keepLoginQuery,
};
