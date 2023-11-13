const { uploadAvatarQuery, findUserQuery } = require("../queries/userQuery");

const uploadAvatarService = async (id, avatar) => {
  try {
    const check = await findUserQuery({id});
    if (!check) throw new Error("User doesnt exist")

    await uploadAvatarQuery(id, avatar)
  } catch (err) {
    throw err;
  }
}

module.exports = {
    uploadAvatarService
};
