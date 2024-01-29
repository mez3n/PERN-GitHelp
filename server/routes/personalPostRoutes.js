const express = require("express");
const personalPostsController = require("../controllers/personalPostsController");
const personalPostsValidations = require("../models/personalPostsValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
  const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();

// Get all personal posts
router.get("/", personalPostsController.getAllPersonalPosts);

// Get a specific personal post by ID
router.get("/:ppid/:uid", personalPostsController.getPersonalPostById);
// Get a specific personal post by ID
router.get("/:uid", personalPostsController.getPersonalPostByUserId);
// Create a new personal post
router.post(
  "/",
  personalPostsValidations,
  handleValidationErrors,
  personalPostsController.createPersonalPost
);

// Update a personal post by ID
router.put(
  "/:ppid/:uid",
  personalPostsValidations,
  handleValidationErrors,
  personalPostsController.updatePersonalPost
);

// Delete a personal post by ID
router.delete("/:ppid/:uid", personalPostsController.deletePersonalPost);

module.exports = router;
