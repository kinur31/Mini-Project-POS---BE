const sequelize = require("../models");
const { Op, Sequelize } = require("sequelize");
const db = require("../models");
const transactionDetails = db.transactionDetail;

const getTransactionDetailQuery = async () => {
  try {
    const res = await transactionDetails.findAll(
      {
        include: [
          {
            model: db.product, // Assuming "product" is the name of your product model
            as: "product", // Optional alias for the association
          },
        ],
      }
    );
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getTransactionDetailQuery,
};
