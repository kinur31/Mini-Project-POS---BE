const { registerService } = require("../services/authService");

const registerController = async (req, res) => {
  try {
    const { fullname, address, email, username, password, role_id } = req.body;

    const result = await registerService(
      fullname,
      address,
      email,
      username,
      password,
      role_id
    );

    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  registerController,
};
