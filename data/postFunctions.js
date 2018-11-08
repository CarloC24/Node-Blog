const postDb = require('./helpers/postDb');

module.exports = {
  get: async (req, res) => {
    try {
      const response = await postDb.get();
      res.status(200).json(response);
    } catch {
      res.status(500).json({ message: 'Cannot get posts' });
    }
  },
  getPostTags: async (req, res) => {
    const id = req.params.id;
    if (id) {
      try {
        const response = await postDb.getPostTags(id);
        res.status(200).json(response);
      } catch {
        res.status(500).json({ message: 'Cannot get post for specific user' });
      }
    } else {
      res.status(404).json({ message: 'Put a valid id' });
    }
  },
  insert: async (req, res) => {
    const id = req.params.id;
    if (id) {
      try {
        const response = await postDb.insert(id);
        res.status(200).json(response);
      } catch {
        res
          .status(500)
          .json({ message: 'Cannot insert post for specific user' });
      }
    } else {
      res.status(404).json({ message: 'Put a valid id' });
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const post = req.body;
    if (user.name) {
      try {
        const response = await postDb.update(id, post);
        res.status(200).json(response);
      } catch {
        res
          .status(500)
          .json({ message: 'Cannot insert post for specific user' });
      }
    } else {
      res.status(404).json({ message: 'Put a valid name on your user' });
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    if (id) {
      try {
        const response = await postDb.insert(id);
        res.status(200).json(response);
      } catch {
        res
          .status(500)
          .json({ message: 'Cannot insert post for specific user' });
      }
    } else {
      res.status(404).json({ message: 'Put a valid id' });
    }
  }
};
