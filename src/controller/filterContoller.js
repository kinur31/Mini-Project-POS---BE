const { filterCashierService } = require("../services/filterService");

const filterCashierController = async (req, res) => {
  try {
    const { fullname } = req.query;
    const result = await filterProductService(fullname);

    return res.status(200).json({
      message: "Success",
      data: result.product,
    });
  } catch (err) {
    return res.status(500).send(err?.message);
  }
};

module.exports = {
  filterCashierController,
};
