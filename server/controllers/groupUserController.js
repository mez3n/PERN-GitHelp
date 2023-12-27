const GroupUser = require("../models/groupUser");

const groupUserController = {
  getAllGroupUsers: async (req, res) => {
    try {
      const groupUsers = await GroupUser.getAllGroupUsers();
      res.json({ groupUsers });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getGroupUserById: async (req, res) => {
    const userId = req.params.id;

    try {
      const groupUser = await GroupUser.getGroupUserById(userId);

      if (groupUser) {
        res.json(groupUser);
      } else {
        res.status(404).json({ error: "Group User not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createGroupUser: async (req, res) => {
    const newUser = req.body;

    try {
      const createdUser = await GroupUser.createGroupUser(newUser);
      res.status(201).json(createdUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateGroupUser: async (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;

    try {
      const groupUser = await GroupUser.updateGroupUser(userId, updatedUser);

      if (groupUser) {
        res.json(groupUser);
      } else {
        res.status(404).json({ error: "Group User not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteGroupUser: async (req, res) => {
    const userId = req.params.id;

    try {
      const deletedUser = await GroupUser.deleteGroupUser(userId);

      if (deletedUser) {
        res.json({ message: "Group User deleted successfully" });
      } else {
        res.status(404).json({ error: "Group User not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = groupUserController;
