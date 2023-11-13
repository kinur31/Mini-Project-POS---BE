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

const uploadAvatarQuery = async(id, avatar) => {
  try {
    const res = await users.update(
      {
        avatar,
      },
      {
        where: {
          id:id
        } 
      }
      )
    return res;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  findUserQuery,
  uploadAvatarQuery,
};
