const express = require("express");
const groupPostsController = require("../controllers/groupPostsController");
const groupPostsValidations = require("../models/groupPostsValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
  const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();

// Get all group posts
router.get("/",groupPostsController.getAllGroupPosts);

// Get a specific group post by ID
router.get("/:GID/:gpid",groupPostsController.getGroupPostById);

// Create a new group post
router.post(
  "/",
  groupPostsValidations,
  handleValidationErrors,
  authMiddleware,
  isPatientOrRepresentativeMiddleware,
  groupPostsController.createGroupPost
);

// Update a group post by ID
router.put(
  "/:GID/:gpid",
  groupPostsValidations,
  handleValidationErrors,
  authMiddleware,
  isPatientOrRepresentativeMiddleware,
  groupPostsController.updateGroupPost
);

// Delete a group post by ID
router.delete("/:GID/:gpid",authMiddleware,isAdminMiddleware,groupPostsController.deleteGroupPost);

module.exports = router;
