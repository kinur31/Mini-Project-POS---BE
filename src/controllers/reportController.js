const { getReportService, getAllReportService, } = require("../services/reportServices");

const getReportController = async (req, res) => {
  try {
    const result = await getReportService();
    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

const getAllReportController = async (req, res) => {
  try {
    const result = await getAllReportService();
    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getReportController,
  getAllReportController,
};
