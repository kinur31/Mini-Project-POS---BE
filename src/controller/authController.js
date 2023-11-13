const {
  loginService,
  keepLoginService,
} = require("../services/authService");

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
  loginController,
  keepLoginController,
};
