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

module.exports = {
  findUserQuery,
};
