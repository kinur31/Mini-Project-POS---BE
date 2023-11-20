const { getTransactionDetailQuery } = require("../queries/transactionDetailQuery");

const getTransactionDetailService = async () => {
    try {
        const res = await getTransactionDetailQuery();
        return res;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getTransactionDetailService
}