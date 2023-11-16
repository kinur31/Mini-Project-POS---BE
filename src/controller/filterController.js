const { filterProductService, paginationProductService } = require("../services/filterService");

const filterProductController = async (req, res) => {
    try {
        const { productName, productCategory, page, pageSize } = req.query;
        const result = await filterProductService( productName, productCategory, page, pageSize );

        return res.status(200).json({
            message: "Success",
            data: result.product,
            totalPage: result.totalPage
        })
    } catch (err) {
        return res.status(500).send(err?.message);
    }
}

const paginationProductController = async (req, res) => {
    try {
        const {page, pageSize} = req.query;

        const result = await paginationProductService(page, pageSize);
        return res.status(200).json({
          message: "Success",
          data: result
        })
      } catch (err) {
        throw err;
      }
}

module.exports = {
    filterProductController,
    paginationProductController
}