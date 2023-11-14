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

module.exports = {
  loginQuery,
  keepLoginQuery,
};
