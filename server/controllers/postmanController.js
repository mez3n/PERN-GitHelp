const Postman = require("../services/postman");

const postmanController = {
  getAllPostmen: async (req, res) => {
    try {
      const postmen = await Postman.getAllPostmen();
      res.json({ postmen });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getPostmanById: async (req, res) => {
    const postmanId = req.params.id;

    try {
      const postman = await Postman.getPostmanById(postmanId);

      if (postman) {
        res.json(postman);
      } else {
        res.status(404).json({ error: "Postman not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createPostman: async (req, res) => {
    const newPostman = req.body;

    try {
      const createdPostman = await Postman.createPostman(newPostman);
      res.status(201).json(createdPostman);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updatePostman: async (req, res) => {
    const postmanId = req.params.id;
    const updatedPostman = req.body;

    try {
      const postman = await Postman.updatePostman(postmanId, updatedPostman);

      if (postman) {
        res.json(postman);
      } else {
        res.status(404).json({ error: "Postman not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deletePostman: async (req, res) => {
    const postmanId = req.params.id;

    try {
      const deletedPostman = await Postman.deletePostman(postmanId);

      if (deletedPostman) {
        res.json({ message: "Postman deleted successfully" });
      } else {
        res.status(404).json({ error: "Postman not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = postmanController;
