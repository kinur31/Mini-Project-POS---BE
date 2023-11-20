const { getTransactionDetailService } = require("../services/transactionDetailService");

const getTransactionDetailController = async (req, res) => {
  try {
    const result = await getTransactionDetailService();
    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getTransactionDetailController,
};
