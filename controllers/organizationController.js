const Organization = require("../models/organization");

const organizationController = {
  getAllOrganizations: async (req, res) => {
    try {
      const organizations = await Organization.getAllOrganizations();
      res.json({ organizations });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getOrganizationById: async (req, res) => {
    const organizationId = req.params.id;

    try {
      const organization = await Organization.getOrganizationById(
        organizationId
      );

      if (organization) {
        res.json(organization);
      } else {
        res.status(404).json({ error: "Organization not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createOrganization: async (req, res) => {
    const newOrganization = req.body;

    try {
      const createdOrganization = await Organization.createOrganization(
        newOrganization
      );
      res.status(201).json(createdOrganization);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateOrganization: async (req, res) => {
    const organizationId = req.params.id;
    const updatedOrganization = req.body;

    try {
      const organization = await Organization.updateOrganization(
        organizationId,
        updatedOrganization
      );

      if (organization) {
        res.json(organization);
      } else {
        res.status(404).json({ error: "Organization not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteOrganization: async (req, res) => {
    const organizationId = req.params.id;

    try {
      const deletedOrganization = await Organization.deleteOrganization(
        organizationId
      );

      if (deletedOrganization) {
        res.json({ message: "Organization deleted successfully" });
      } else {
        res.status(404).json({ error: "Organization not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = organizationController;
