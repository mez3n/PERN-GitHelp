const AdminGroupsRequests = require("../services/adminGroupsRequests");

const adminGroupsRequestsController = {
  createAdminGroupsRequest: async (req, res) => {
    const { group_user_id, GID, A_ID, state } = req.body;

    try {
      // Additional validation if needed

      const createdAdminGroupsRequest =
        await AdminGroupsRequests.createAdminGroupsRequest(
          group_user_id,
          GID,
          A_ID,
          state
        );
      res.status(201).json(createdAdminGroupsRequest);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = adminGroupsRequestsController;
