const express = require("express");
const groupController = require("../controllers/groupController");
const groupValidations = require("../models/groupValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
  const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();

// Get all groups
router.get("/", groupController.getAllGroups);

// Get a specific group by ID
router.get("/:id", groupController.getGroupById);

// // Create a new group
// router.post(
//   "/",
//   groupValidations,
//   handleValidationErrors,
//   groupController.createGroup
// );

// Update a group by ID
// router.put(
//   "/:id",
//   groupValidations,
//   handleValidationErrors,
//   isAdminMiddleware,
//   groupController.updateGroup
// );

// Delete a group by ID
// router.delete("/:id",isGroupAdmin,groupController.deleteGroup);

module.exports = router;
