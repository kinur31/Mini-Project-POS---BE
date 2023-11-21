const { Op } = require("sequelize");
const db = require("../models");
const moment = require("moment");
const products = db.product;
const transactions = db.transaction;
const transactionDetails = db.transactionDetail;

const checkStockAvailability = async ({ cartItems = null }) => {
  try {
    const productIds = cartItems.map((item) => item.id);
    const res = await products.findAll({
      where: {
        id: {
          [Op.in]: productIds,
        },
        stock: {
          [Op.lt]: cartItems.map((item) => item.qty),
        },
      },
      // transaction,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const createTransactionQuery = async ({
  cartItems = null,
  paymentAmount = null,
  paymentChange = null,
  transaction = null,
}) => {
  const t = await db.sequelize.transaction();

  try {
    console.log(`Amount: ${paymentAmount}`);
    console.log(`Change: ${paymentChange}`);
    const newDate = new Date();
    console.log(`Waktu: ${new Date().toString()}`);

    const createdTransaction = await transactions.create(
      {
        cashier_id: 1,
        // date: new Date().toISOString(),
        // date: moment().format(),
        payment_amount: paymentAmount,
        payment_change: paymentChange,
      },
      { transaction }
    );

    const transactionDetailsArray = [];

    for (const item of cartItems) {
      const productInstance = await products.findByPk(item.id, { transaction });

      productInstance.stock -= item.qty;
      if(productInstance.stock === 0) productInstance.status_product = false;
      await productInstance.save({ transaction });

      const transactionDetail = await transactionDetails.create(
        {
          transaction_id: createdTransaction.id,
          product_id: item.id,
          qty: item.qty,
          price: item.price,
        },
        { transaction }
      );

      transactionDetailsArray.push(transactionDetail);
    }

    const totalQty = transactionDetailsArray.reduce(
      (sum, detail) => sum + detail.qty,
      0
    );
    const totalPrice = transactionDetailsArray.reduce(
      (sum, detail) => sum + detail.price * detail.qty,
      0
    );
    createdTransaction.total_qty = totalQty;
    createdTransaction.total_price = totalPrice;

    await createdTransaction.save({ transaction });
    await t.commit();

    return createdTransaction;
  } catch (error) {
    await t.rollback();
    throw error;
  }
};

module.exports = {
  checkStockAvailability,
  createTransactionQuery,
};
