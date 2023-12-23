const Admin = require('../models/admin');

const adminController = {
  getAllAdmins: async (req, res) => {
    try {
      const admins = await Admin.getAllAdmins();
      res.json({ admins });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getAdminById: async (req, res) => {
    const adminId = req.params.id;

    try {
      const admin = await Admin.getAdminById(adminId);

      if (admin) {
        res.json(admin);
      } else {
        res.status(404).json({ error: 'Admin not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createAdmin: async (req, res) => {
    const newAdmin = req.body;

    try {
      const createdAdmin = await Admin.createAdmin(newAdmin);
      res.status(201).json(createdAdmin);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateAdmin: async (req, res) => {
    const adminId = req.params.id;
    const updatedAdmin = req.body;

    try {
      const admin = await Admin.updateAdmin(adminId, updatedAdmin);

      if (admin) {
        res.json(admin);
      } else {
        res.status(404).json({ error: 'Admin not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteAdmin: async (req, res) => {
    const adminId = req.params.id;

    try {
      const deletedAdmin = await Admin.deleteAdmin(adminId);

      if (deletedAdmin) {
        res.json({ message: 'Admin deleted successfully' });
      } else {
        res.status(404).json({ error: 'Admin not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = adminController;
