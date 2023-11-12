const db = require("../models");
const { Op } = require("sequelize");
const users = db.users;

const findUserQuery = async ({ email = null, username = null }) => {
  console.log(email, username);
  try {
    const res = await users.findOne({
      where: {
        [Op.or]: {
          email,
          username,
        },
      },
    });

    return res;
  } catch (err) {
    throw err;
  }
};

const createCashierQuery = async (
  fullname,
  address,
  email,
  username,
  password
) => {
  try {
    const res = await users.create({
      fullname,
      address,
      email,
      username,
      password,
      role_id: 2,
    });
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }
};

const updateCashierQuery = async (id, category_name) => {
  try {
    const res = await users.update(
      {
        category_name,
      },
      {
        where: {
          id: id,
        },
      }
    );
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }
};

const deleteCashierQuery = async (id) => {
  try {
    const res = await users.destroy({
      where: {
        id: id,
      },
    });
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findUserQuery,
  createCashierQuery,
  updateCashierQuery,
  deleteCashierQuery,
};
