const express = require("express");
const organizationController = require("../controllers/organizationController");
const organizationValidations = require("../models/organizationValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
  const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();

// Get all organizations
router.get("/", organizationController.getAllOrganizations);

router.get("/unapproved", isAdminMiddleware,organizationController.getunapprovedOrganizations);
// Get a specific organization by ID
router.get("/:id", organizationController.getOrganizationById);

router.get("/location/:id", organizationController.getOrganizationLocation);
// Create a new organization
router.post(
  "/",
  organizationValidations,
  handleValidationErrors,
  organizationController.createOrganization
);

// Update an organization by ID
router.put(
  "/:id",
  organizationValidations,
  handleValidationErrors,
  organizationController.updateOrganization
);

// Delete an organization by ID
router.delete("/:id", organizationController.deleteOrganization);

module.exports = router;
