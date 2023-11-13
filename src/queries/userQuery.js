const db = require("../models");
const { Op } = require("sequelize");
const users = db.users;

const findUserQuery = async ({ id = null, email = null, username = null }) => {
  console.log(email, username);
  try {
    const res = await users.findOne({
      where: {
        [Op.or]: {
          id,
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
      status: true,
    });
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }
};

const updateCashierQuery = async (id, fullname, address, username) => {
  try {
    const res = await users.update(
      {
        fullname,
        address,
        username,
        status: true,
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
    await users.destroy({
      where: {
        id: id,
      },
    });
    console.log(res);
  } catch (err) {
    throw err;
  }
};

const deactiveCashierQuery = async (id) => {
  try {
    const res = await users.update(
      {
        status: false,
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

module.exports = {
  findUserQuery,
  createCashierQuery,
  updateCashierQuery,
  deleteCashierQuery,
  deactiveCashierQuery,
};
