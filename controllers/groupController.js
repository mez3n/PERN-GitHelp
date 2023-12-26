const Group = require("../services/group.js");

const groupController = {
  getAllGroups: async (req, res) => {
    try {
      const groups = await Group.getAllGroups();
      res.json({ groups });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getGroupById: async (req, res) => {
    const groupId = req.params.id;

    try {
      const group = await Group.getGroupById(groupId);

      if (group) {
        res.json(group);
      } else {
        res.status(404).json({ error: "Group not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createGroup: async (req, res) => {
    const newGroup = req.body;

    try {
      const createdGroup = await Group.createGroup(newGroup);
      res.status(201).json(createdGroup);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateGroup: async (req, res) => {
    const groupId = req.params.id;
    const updatedGroup = req.body;

    try {
      const group = await Group.updateGroup(groupId, updatedGroup);

      if (group) {
        res.json(group);
      } else {
        res.status(404).json({ error: "Group not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteGroup: async (req, res) => {
    const groupId = req.params.id;

    try {
      const deletedGroup = await Group.deleteGroup(groupId);

      if (deletedGroup) {
        res.json({ message: "Group deleted successfully" });
      } else {
        res.status(404).json({ error: "Group not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = groupController;
