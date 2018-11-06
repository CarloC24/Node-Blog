const userDb = require('./helpers/userDb');

module.exports = {
  getUsers: async (req, res) => {
    try {
      const response = await userDb.get();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getSingleUser: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await userDb.get(id);
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  addUser: async (req, res) => {
    const user = req.body;
    if (user.name) {
      try {
        const response = await userDb.insert(user);
        res.status(204).json(response);
      } catch {
        res.status(422).json({ message: 'unprocessable entity' });
      }
    } else {
      res
        .status(500)
        .json({ message: 'Needs to have a value on the "name" field' });
    }
  },
  updateUser: async (req, res) => {
    const user = req.body;
    const { id } = req.params;
    try {
      const response = await userDb.update(id, user);
      res.status(200).json(response);
    } catch {
      res.status(500).json({ message: 'Error updating field' });
    }
  },
  deleteUser: async (req, res) => {
    const { id } = req.params;

    try {
      const response = await userDb.remove(id);
      res.status(200).json(response);
    } catch {
      res.status(500).json({ message: 'Not a valid user this is the error' });
    }
  },
  getUserPosts: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await userDb.getUserPosts(id);
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
