const AdminManagesGroups = require("../services/adminManagesGroups");

const adminManagesGroupsController = {
  getAllAdminManagesGroups: async (req, res) => {
    try {
      const adminManagesGroups =
        await AdminManagesGroups.getAllAdminManagesGroups();
      res.json({ adminManagesGroups });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getAdminManagesGroupsById: async (req, res) => {
    const adminId = req.params.adminId;
    const groupId = req.params.groupId;

    try {
      const adminManagesGroups =
        await AdminManagesGroups.getAdminManagesGroupsById(adminId, groupId);

      if (adminManagesGroups) {
        res.json(adminManagesGroups);
      } else {
        res.status(404).json({ error: "Admin-Managed Group not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getAdminManagesGroupsByGroupId: async (req, res) => {
    const groupId = req.params.groupId;

    try {
      const adminManagesGroups =
        await AdminManagesGroups.getAdminManagesGroupsByGroupId(groupId);

      if (adminManagesGroups) {
        res.json(adminManagesGroups);
      } else {
        res.status(404).json({ error: "Admin-Managed Group not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  createAdminManagesGroups: async (req, res) => {
    const newAdminManagesGroups = req.body;

    try {
      const createdAdminManagesGroups =
        await AdminManagesGroups.createAdminManagesGroups(
          newAdminManagesGroups
        );
      res.status(201).json(createdAdminManagesGroups);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateAdminManagesGroups: async (req, res) => {
    const adminId = req.params.adminId;
    const groupId = req.params.groupId;
    const updatedAdminManagesGroups = req.body;

    try {
      const adminManagesGroups =
        await AdminManagesGroups.updateAdminManagesGroups(
          adminId,
          groupId,
          updatedAdminManagesGroups
        );

      if (adminManagesGroups) {
        res.json(adminManagesGroups);
      } else {
        res.status(404).json({ error: "Admin-Managed Group not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteAdminManagesGroups: async (req, res) => {
    const adminId = req.params.adminId;
    const groupId = req.params.groupId;

    try {
      const deletedAdminManagesGroups =
        await AdminManagesGroups.deleteAdminManagesGroups(adminId, groupId);

      if (deletedAdminManagesGroups) {
        res.json({ message: "Admin-Managed Group deleted successfully" });
      } else {
        res.status(404).json({ error: "Admin-Managed Group not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = adminManagesGroupsController;
