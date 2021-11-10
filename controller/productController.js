
module.exports = {
    getAllProducts: (req, res, next) => {
        res.status(200).json({
            success: true,
            message:"All Products"
        })
    }
}