const express = require("express");
const groupsRequestsController = require("../controllers/groupsRequestsController");
const groupsRequestsValidations = require("../models/groupsRequestsValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
  const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();

// Get all groups requests
router.get("/", groupsRequestsController.getAllGroupsRequests);

// Get groups requests by ID
router.get(
  "/:group_user_id/:GID",
  authMiddleware,
  isGroupAdmin,
  groupsRequestsController.getGroupsRequestsById
);

// Create a new groups request
router.post(
  "/",
  groupsRequestsValidations,
  handleValidationErrors,
  authMiddleware,
  isPatientOrRepresentativeMiddleware,
  groupsRequestsController.createGroupsRequests
);

// // Update groups request by ID
// router.put(
//   "/:group_user_id/:GID",
//   isGroupAdmin,
//   groupsRequestsController.updateGroupsRequests
// );

// // Delete groups request by ID
// router.delete(
//   "/:group_user_id/:GID",
//   isGroupAdmin,
//   groupsRequestsController.deleteGroupsRequests
// );

module.exports = router;
