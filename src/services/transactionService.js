const {
  createTransactionQuery,
  checkStockAvailability,
} = require("../queries/transactionQuery");

const createTransactionService = async ({
  cartItems,
  paymentAmount,
  paymentChange,
}) => {
  try {
    const checkStock = await checkStockAvailability({ cartItems });
    if (checkStock.length > 0) throw new Error("Insufficient Stock");

    const result = await createTransactionQuery({
      cartItems,
      paymentAmount,
      paymentChange,
    });
    return result;
  } catch (err) {
    throw new Error("An Error Occurred During Checkout. Please Try Again!");
  }
};

module.exports = {
  createTransactionService,
};
