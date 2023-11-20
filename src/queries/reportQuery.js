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
          model: transaction, // Model transaction yang sesuai
          as: 'transaction', // Nama asosiasi yang telah didefinisikan di model transactionDetail
          
          include: [
            {
              model: user, // Model user yang sesuai
              as: 'cashier', // Nama asosiasi yang telah didefinisikan di model transaction
              attributes: ['fullname', 'email', 'address'], // Atribut dari tabel user yang ingin ditampilkan
            },
          ],
          
        },
        {
          model: product, // Model product yang sesuai
          as: 'product', // Nama asosiasi yang akan ditambahkan di model transactionDetail
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
