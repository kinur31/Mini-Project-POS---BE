const { getReportService } = require("../services/reportServices");

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

module.exports = {
  getReportController,
};
