const { getReportQuery } = require("../queries/reportQuery");

const getReportService = async () => {
    try {
        const res = await getReportQuery();
        return res;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getReportService
}