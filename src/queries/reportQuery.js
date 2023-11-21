const { Op, Sequelize } = require("sequelize");
const { transaction, transactionDetail, user, product } = require("../models");
const db = require("../models");
const users = db.user;

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

const getAllReportQuery = async () => {
  try {
    const report = await transactionDetail.findAll({
      include: [
        {
          model: transaction, 
          as: 'transaction', 
          
          include: [
            {
              model: user, 
              as: 'cashier', 
              attributes: ['fullname', 'email', 'address'], 
            },
          ],
          
        },
        {
          model: product, 
          as: 'product', 
        },
      ],
    });

    return report;
  } catch (err) {
    console.error('Error fetching report:', err);
    throw err;
  }
}



module.exports = {
  getReportQuery,
  getAllReportQuery,
};
