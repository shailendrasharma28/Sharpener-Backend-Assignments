const path = require("path")

const productController = {
  getAllProducts: (req, res) => {
    const file = path.join(__dirname,"../","view", "product.html")
    res.sendFile(file);
  },
};

module.exports = productController;