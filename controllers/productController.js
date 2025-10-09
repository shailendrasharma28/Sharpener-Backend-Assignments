const productService = require("../services/productService");

const productController = {
  getAllProducts: (req, res) => {
    const response = productService.allProdcuctresponse()
    res.send(response);
  },

  addProduct: (req, res) => {
    const response = productService.addProdcuctresponse()
    res.send(response);
  },

  getProductById: (req, res) => {
    const response = productService.getProdcuctByIdresponse(req.params)
    res.send(response);
  },
};

module.exports = productController;