const express = require("express");
const adminManagesGroupsController = require("../controllers/adminManagesGroupsController");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
const router = express.Router();
const adminManagesGroupsValidations = require("../models/adminManagesGroupsValidations");
const authMiddleware = require("../middlewares/auth.middleware.js");
// Get all Admin-Managed Groups
router.get("/", adminManagesGroupsController.getAllAdminManagesGroups);

// Get an Admin-Managed Group by ID
router.get(
  "/:adminId/:groupId",
  adminManagesGroupsController.getAdminManagesGroupsById
);

// Get an Admin-Managed Group by Group ID
router.get(
  "/:groupId",
  adminManagesGroupsController.getAdminManagesGroupsByGroupId
);

// Create a new Admin-Managed Group
router.post(
  "/",
  adminManagesGroupsValidations,
  handleValidationErrors,
  adminManagesGroupsController.createAdminManagesGroups
);

// Update an Admin-Managed Group by ID
router.put(
  "/:adminId/:groupId",
  adminManagesGroupsValidations,
  handleValidationErrors,
  isAdminMiddleware,
  adminManagesGroupsController.updateAdminManagesGroups
);

// Delete an Admin-Managed Group by ID
router.delete(
  "/:adminId/:groupId",
  isAdminMiddleware,
  adminManagesGroupsController.deleteAdminManagesGroups
);

module.exports = router;
