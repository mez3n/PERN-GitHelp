const express = require("express");
const groupPostsController = require("../controllers/groupPostsController");
const groupPostsValidations = require("../models/groupPostsValidations");

const router = express.Router();

// Get all group posts
router.get("/", groupPostsController.getAllGroupPosts);

// Get a specific group post by ID
router.get("/:GID/:gpid", groupPostsController.getGroupPostById);

// Create a new group post
router.post("/", groupPostsValidations, groupPostsController.createGroupPost);

// Update a group post by ID
router.put(
  "/:GID/:gpid",
  groupPostsValidations,
  groupPostsController.updateGroupPost
);

// Delete a group post by ID
router.delete("/:GID/:gpid", groupPostsController.deleteGroupPost);

module.exports = router;
