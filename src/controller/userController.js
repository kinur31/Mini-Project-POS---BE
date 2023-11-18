const {
  findCashierByIdService,
  createCashierService,
  updateCashierService,
  deleteCashierService,
  deactiveCashierService,
} = require("../services/userService");

const findCashierByIdController = async (req, res) => {
  try {
    const result = await findCashierByIdService();

    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).send("Internal Server Error");
  }
};

const createCashierController = async (req, res) => {
  try {
    const { fullname, address, email, username, password, role_id } = req.body;

    const result = await createCashierService(
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

const updateCashierController = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, address, username } = req.body;
    const result = await updateCashierService(id, fullname, address, username);

    return res.status(200).json({
      message: "Update successfully",
    });
  } catch (err) {
    return res.status(500).send(err?.message);
  }
};

const deleteCashierController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteCashierService(id);

    return res.status(200).json({
      message: "Delete cashier successfully",
    });
  } catch (err) {
    return res.status(500).send(err?.message);
  }
};

const deactiveCashierController = async (req, res) => {
  try {
    const { id } = req.params;
    await deactiveCashierService(id);

    return res.status(200).json({
      message: "Deactive cashier successfully",
    });
  } catch (err) {
    return res.status(500).send(err?.message);
  }
};

module.exports = {
  findCashierByIdController,
  createCashierController,
  updateCashierController,
  deleteCashierController,
  deactiveCashierController,
};
