const express = require("express");
const personalPostsController = require("../controllers/personalPostsController");
const personalPostsValidations = require("../models/personalPostsValidations");

const router = express.Router();

// Get all personal posts
router.get("/", personalPostsController.getAllPersonalPosts);

// Get a specific personal post by ID
router.get("/:ppid/:pfid", personalPostsController.getPersonalPostsById);

// Create a new personal post
router.post(
  "/",
  personalPostsValidations,
  personalPostsController.createPersonalPosts
);

// Update a personal post by ID
router.put(
  "/:ppid/:pfid",
  personalPostsValidations,
  personalPostsController.updatePersonalPosts
);

// Delete a personal post by ID
router.delete("/:ppid/:pfid", personalPostsController.deletePersonalPosts);

module.exports = router;
