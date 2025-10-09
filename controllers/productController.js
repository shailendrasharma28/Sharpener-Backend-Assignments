const productController = {
  getAllProducts: (req, res) => {
    res.send(`<h1>Fetching all products</h1>`);
  },

  addProduct: (req, res) => {
    res.send(`<h1>Adding a new product</h1>`);
  },

  getProductById: (req, res) => {
    const { id } = req.params;
    res.send(`<h1>Fetching product with ID: ${id}</h1>`);
  },
};

module.exports = productController;