const express = require("express");
const groupCommentsController = require("../controllers/groupCommentsController");

const router = express.Router();

// Get all group comments
router.get("/", groupCommentsController.getAllGroupComments);

// Get a specific group comment by ID
router.get("/:gcid", groupCommentsController.getGroupCommentById);

// Create a new group comment
router.post("/", groupCommentsController.createGroupComment);

// Update a group comment by ID
router.put("/:gcid", groupCommentsController.updateGroupComment);

// Delete a group comment by ID
router.delete("/:gcid", groupCommentsController.deleteGroupComment);

module.exports = router;
