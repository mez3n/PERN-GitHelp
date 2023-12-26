const express = require("express");
const organizationController = require("../controllers/organizationController");
const organizationValidations = require("../models/organizationValidations");

const router = express.Router();

// Get all organizations
router.get("/", organizationController.getAllOrganizations);

// Get a specific organization by ID
router.get("/:id", organizationController.getOrganizationById);

// Create a new organization
router.post(
  "/",
  organizationValidations,
  organizationController.createOrganization
);

// Update an organization by ID
router.put(
  "/:id",
  organizationValidations,
  organizationController.updateOrganization
);

// Delete an organization by ID
router.delete("/:id", organizationController.deleteOrganization);

module.exports = router;
