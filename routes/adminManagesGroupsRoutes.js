const express = require("express");
const adminManagesGroupsController = require("../controllers/adminManagesGroupsController");

const router = express.Router();
const adminManagesGroupsValidations = require("../models/adminManagesGroupsValidations");

// Get all Admin-Managed Groups
router.get("/", adminManagesGroupsController.getAllAdminManagesGroups);

// Get an Admin-Managed Group by ID
router.get(
  "/:adminId/:groupId",
  adminManagesGroupsController.getAdminManagesGroupsById
);

// Create a new Admin-Managed Group
router.post(
  "/",
  adminManagesGroupsValidations,
  adminManagesGroupsController.createAdminManagesGroups
);

// Update an Admin-Managed Group by ID
router.put(
  "/:adminId/:groupId",
  adminManagesGroupsValidations,
  adminManagesGroupsController.updateAdminManagesGroups
);

// Delete an Admin-Managed Group by ID
router.delete(
  "/:adminId/:groupId",
  adminManagesGroupsController.deleteAdminManagesGroups
);

module.exports = router;
