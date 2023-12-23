const express = require("express");
const groupPostsController = require("../controllers/groupPostsController");

const router = express.Router();

// Get all group posts
router.get("/", groupPostsController.getAllGroupPosts);

// Get a specific group post by ID
router.get("/:GID/:gpid", groupPostsController.getGroupPostById);

// Create a new group post
router.post("/", groupPostsController.createGroupPost);

// Update a group post by ID
router.put("/:GID/:gpid", groupPostsController.updateGroupPost);

// Delete a group post by ID
router.delete("/:GID/:gpid", groupPostsController.deleteGroupPost);

module.exports = router;
