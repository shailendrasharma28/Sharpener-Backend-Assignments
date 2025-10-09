const path = require("path")

const productController = {
  getAllProducts: (req, res) => {
    const file = path.join(__dirname,"../","view", "product.html")
    res.sendFile(file);
  },

  addProduct: (req, res) => {
    const data = req.body.productName
    // res.sendFile(file);
    res.json({value: data})
  },
};

module.exports = productController;