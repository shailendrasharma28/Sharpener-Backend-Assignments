const userController = {
  getAllUsers: (req, res) => {
    res.send(`<h1>Fetching all users</h1>`);
  },

  addUser: (req, res) => {
    res.send(`<h1>Adding a new user</h1>`);
  },

  getUserById: (req, res) => {
    const { id } = req.params;
    res.send(`<h1>Fetching user with ID: ${id}</h1>`);
  },
};

module.exports = userController;
