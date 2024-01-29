const express = require("express");
const groupCommentsController = require("../controllers/groupCommentsController");
const groupCommentsValidations = require("../models/groupCommentsValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
  const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();

// Get all group comments
router.get("/",groupCommentsController.getAllGroupComments);

// Get a specific group comment by ID
router.get("/:gcid",groupCommentsController.getGroupCommentById);

// Create a new group comment
router.post(
  "/",
  groupCommentsValidations,
  handleValidationErrors,
  authMiddleware,
  isPatientOrRepresentativeMiddleware,
  groupCommentsController.createGroupComment
);

// Update a group comment by ID
router.put(
  "/:gcid",
  groupCommentsValidations,
  handleValidationErrors,
  isOrganizationMiddleware,
  groupCommentsController.updateGroupComment
);

// Delete a group comment by ID
router.delete("/:gcid",authMiddleware,isPatientOrRepresentativeMiddleware ,groupCommentsController.deleteGroupComment);

module.exports = router;
