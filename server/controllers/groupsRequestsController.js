const GroupsRequests = require("../services/groupsRequests");

const groupsRequestsController = {
  getAllGroupsRequests: async (req, res) => {
    try {
      const groupsRequests = await GroupsRequests.getAllGroupsRequests();
      res.json({ groupsRequests });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getGroupsRequestsById: async (req, res) => {
    const { group_user_id, GID } = req.params;

    try {
      const groupsRequests = await GroupsRequests.getGroupsRequestsById(
        group_user_id,
        GID
      );

      if (groupsRequests) {
        res.json(groupsRequests);
      } else {
        res.status(404).json({ error: "Groups Requests not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createGroupsRequests: async (req, res) => {
    const { group_user_id, GID } = req.body;

    try {
      const createdGroupsRequests = await GroupsRequests.createGroupsRequests(
        group_user_id,
        GID
      );
      res.status(201).json(createdGroupsRequests);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateGroupsRequests: async (req, res) => {
    const { group_user_id, GID } = req.params;
    const { state } = req.body;

    try {
      const updatedGroupsRequests = await GroupsRequests.updateGroupsRequests(
        group_user_id,
        GID,
        state
      );

      if (updatedGroupsRequests) {
        res.json(updatedGroupsRequests);
      } else {
        res.status(404).json({ error: "Groups Requests not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteGroupsRequests: async (req, res) => {
    const { group_user_id, GID } = req.params;

    try {
      const deletedGroupsRequests = await GroupsRequests.deleteGroupsRequests(
        group_user_id,
        GID
      );

      if (deletedGroupsRequests) {
        res.json({ message: "Groups Requests deleted successfully" });
      } else {
        res.status(404).json({ error: "Groups Requests not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = groupsRequestsController;
