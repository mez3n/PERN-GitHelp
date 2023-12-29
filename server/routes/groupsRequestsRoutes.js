const express = require("express");
const groupsRequestsController = require("../controllers/groupsRequestsController");
const groupsRequestsValidations = require("../models/groupsRequestsValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();

// Get all groups requests
router.get("/", groupsRequestsController.getAllGroupsRequests);

// Get groups requests by ID
router.get(
  "/:group_user_id/:GID",
  groupsRequestsController.getGroupsRequestsById
);

// Create a new groups request
router.post(
  "/",
  groupsRequestsValidations,
  handleValidationErrors,
  groupsRequestsController.createGroupsRequests
);

// Update groups request by ID
router.put(
  "/:group_user_id/:GID",
  groupsRequestsController.updateGroupsRequests
);

// Delete groups request by ID
router.delete(
  "/:group_user_id/:GID",
  groupsRequestsController.deleteGroupsRequests
);

module.exports = router;
