const { filterProductService } = require("../services/filterService");

const findProductController = async (req, res) => {
    try {
        const {productName} = req.query;
        const result = await filterProductService(productName)
        
        return res.status(200).json({
            message: "Success",
            data: result
        })
    } catch (err) {
        return res.status(500).send(err?.message);
    }
}

const filterCategoryController = async (req, res) => {
    try {
        const { productCategory } = req.query;
        const result = await filterProductService( productCategory );

        return res.status(200).json({
            message: "Success",
            data: result
        })
    } catch (err) {
        return res.status(500).send(err?.message);
    }
}

module.exports = {
    findProductController,
    filterCategoryController,
}