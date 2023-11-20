const { getReportQuery, getAllReportQuery } = require("../queries/reportQuery");

const getReportService = async () => {
    try {
        const res = await getReportQuery();
        return res;
    } catch (err) {
        throw err;
    }
}

const getAllReportService = async () => {
    try {
        const res = await getAllReportQuery();
        return res;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getReportService,
    getAllReportService,
}