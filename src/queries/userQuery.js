const db = require("../models");
const { Op } = require("sequelize");
const users = db.users;

const findUserQuery = async ({ username = null, password = null }) => {
  console.log(username, password);
  try {
    const res = await users.findOne({
      where: {
        [Op.or]: {
          username,
          password,
        },
      },
    });

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findUserQuery,
};
