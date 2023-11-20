const { Op, Sequelize } = require("sequelize");
const { transaction } = require("../models");

const getReportQuery = async () => {
  try {
    const report = await transaction.findAll({
      attributes: [
        [Sequelize.fn('COUNT', Sequelize.col('*')), 'totalTransactions'],
        [Sequelize.fn('SUM', Sequelize.col('total_qty')), 'totalQty'],
        [Sequelize.fn('AVG', Sequelize.col('total_qty')), 'averageQty'],
        [Sequelize.fn('SUM', Sequelize.col('total_price')), 'totalSales'],
        [Sequelize.fn('AVG', Sequelize.col('total_price')), 'averageSales'],
        [Sequelize.fn('DATE', Sequelize.col('createdAt')), 'date'],
      ],
      group: [Sequelize.fn('DATE', Sequelize.col('createdAt'))],
      order: [[Sequelize.fn('DATE', Sequelize.col('createdAt')), 'ASC']],
    });

    return report;
  } catch (err) {
    console.error('Error fetching report:', err);
    throw err;
  }
};

module.exports = {
  getReportQuery,
};
