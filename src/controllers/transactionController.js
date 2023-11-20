const { createTransactionService } = require("../services/transactionService");

const createTransactionController = async (req, res) => {
  try {
    const { cartItems, paymentAmount, paymentChange } = req.body;
    console.log(cartItems, paymentAmount, paymentChange);

    const result = await createTransactionService({
      cartItems,
      paymentAmount,
      paymentChange,
    });

    return res.status(200).json({
      success: true,
      message: "Transaction Completed Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err?.message);
  }
};

module.exports = {
  createTransactionController,
};
