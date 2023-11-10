const db = require("../models");
const { Op } = require("sequelize");
const users = db.users;

const registerQuery = async (email, username, password, roleId, avatar) => {
  const t = await db.sequelize.transaction();
  try {
    const res = await users.create(
      {
        email,
        username,
        password,
        roleId,
        avatar,
      },
      { transaction: t }
    );
    await t.commit();
    return res;
  } catch (err) {
    await t.rollback();
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
