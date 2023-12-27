const GroupPosts = require("../services/groupPosts");

const groupPostsController = {
  getAllGroupPosts: async (req, res) => {
    try {
      const groupPosts = await GroupPosts.getAllGroupPosts();
      res.json({ groupPosts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getGroupPostById: async (req, res) => {
    const gpid = req.params.gpid;
    const GID = req.params.GID;

    try {
      const groupPost = await GroupPosts.getGroupPostById(gpid, GID);

      if (groupPost) {
        res.json(groupPost);
      } else {
        res.status(404).json({ error: "Group Post not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createGroupPost: async (req, res) => {
    const newGroupPost = req.body;

    try {
      const createdGroupPost = await GroupPosts.createGroupPost(newGroupPost);
      res.status(201).json(createdGroupPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateGroupPost: async (req, res) => {
    const gpid = req.params.gpid;
    const GID = req.params.GID;
    const updatedGroupPost = req.body;

    try {
      const groupPost = await GroupPosts.updateGroupPost(
        gpid,
        GID,
        updatedGroupPost
      );

      if (groupPost) {
        res.json(groupPost);
      } else {
        res.status(404).json({ error: "Group Post not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteGroupPost: async (req, res) => {
    const gpid = req.params.gpid;
    const GID = req.params.GID;

    try {
      const deletedGroupPost = await GroupPosts.deleteGroupPost(gpid, GID);

      if (deletedGroupPost) {
        res.json({ message: "Group Post deleted successfully" });
      } else {
        res.status(404).json({ error: "Group Post not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = groupPostsController;
