const cartController = {
  getAllCart: (req, res) => {
    const { userId } = req.params;
    res.send(`<h1>Fetching cart for user with ID: ${userId}</h1>`);
  },

  addCart: (req, res) => {
    const { userId } = req.params;
    res.send(`<h1>Adding product to cart for user with ID: ${userId}</h1>`);
  },
};

module.exports = cartController;
