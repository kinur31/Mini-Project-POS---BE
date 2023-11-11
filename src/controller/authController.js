const {
  registerService,
  loginService,
  keepLoginService,
} = require("../services/authService");

const registerController = async (req, res) => {
  try {
    const { fullname, address, email, username, password, role_id, status } = req.body;

    const result = await registerService(
      fullname,
      address,
      email,
      username,
      password,
      role_id,
      status
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

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await loginService(username, password);

    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Username atau password salah!");
  }
};

const keepLoginController = async (req, res) => {
  try {
    const { id } = req.user;

    const result = await keepLoginService(id);

    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  registerController,
  loginController,
  keepLoginController,
};
