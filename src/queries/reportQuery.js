const sequelize = require("../models");
const { Op, Sequelize } = require("sequelize");
const db = require("../models");
const transactions = db.transaction;

const getReportQuery = async () => {
  try {
    const res = await transactions.findAll();
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getReportQuery,
};
