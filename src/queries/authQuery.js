const db = require("../models");
const { Op } = require("sequelize");
const users = db.users;

const registerQuery = async (fullname, address, email, username, password, role_id, status) => {
  try {
    const res = await users.create(
      {
        fullname,
        address,
        email,
        username,
        password,
        role_id,
        status
      },
    );
    return res;
  } catch (err) {
    throw err;
  }
};

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
  registerQuery,
  loginQuery,
  keepLoginQuery,
};
