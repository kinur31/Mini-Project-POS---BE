const {
  createCashierService,
  updateCashierService,
  deleteCashierService,
} = require("../services/userService");

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
  console.log();
  try {
    const { id } = req.params;
    const { category_name } = req.body;
    const result = await updateCashierService(id, category_name);

    return res.status(200).json({
      message: "Update category successfully",
    });
  } catch (err) {
    return res.status(500).send("Update product category failed");
  }
};

const deleteCashierController = async (req, res) => {
  console.log();
  try {
    const { id } = req.params;
    const result = await deleteCashierService(id);

    return res.status(200).json({
      message: "Delete product category successfully",
    });
  } catch (err) {
    return res.status(500).send("Delete product category failed");
  }
};

module.exports = {
  createCashierController,
  updateCashierController,
  deleteCashierController,
};
