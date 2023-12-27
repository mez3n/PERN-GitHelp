const PersonalPost = require("../services/personalPosts");

const personalPostsController = {
  getAllPersonalPosts: async (req, res) => {
    try {
      const personalPosts = await PersonalPost.getAllPersonalPosts();
      res.json({ personalPosts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getPersonalPostById: async (req, res) => {
    const ppid = req.params.ppid;
    const uid = req.params.uid;

    try {
      const personalPost = await PersonalPost.getPersonalPostById(ppid, uid);

      if (personalPost) {
        res.json(personalPost);
      } else {
        res.status(404).json({ error: "Personal Post not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createPersonalPost: async (req, res) => {
    const newPersonalPost = req.body;

    try {
      const createdPersonalPost = await PersonalPost.createPersonalPost(
        newPersonalPost
      );
      res.status(201).json(createdPersonalPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updatePersonalPost: async (req, res) => {
    const ppid = req.params.ppid;
    const uid = req.params.uid;
    const updatedPersonalPost = req.body;

    try {
      const personalPost = await PersonalPost.updatePersonalPost(
        ppid,
        uid,
        updatedPersonalPost
      );

      if (personalPost) {
        res.json(personalPost);
      } else {
        res.status(404).json({ error: "Personal Post not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deletePersonalPost: async (req, res) => {
    const ppid = req.params.ppid;
    const uid = req.params.uid;

    try {
      const deletedPersonalPost = await PersonalPost.deletePersonalPost(
        ppid,
        uid
      );

      if (deletedPersonalPost) {
        res.json({ message: "Personal Post deleted successfully" });
      } else {
        res.status(404).json({ error: "Personal Post not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = personalPostsController;
