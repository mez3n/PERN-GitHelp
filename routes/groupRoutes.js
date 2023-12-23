const express = require("express");
const groupController = require("../controllers/groupController");

const router = express.Router();

// Get all groups
router.get("/", groupController.getAllGroups);

// Get a specific group by ID
router.get("/:id", groupController.getGroupById);

// Create a new group
router.post("/", groupController.createGroup);

// Update a group by ID
router.put("/:id", groupController.updateGroup);

// Delete a group by ID
router.delete("/:id", groupController.deleteGroup);

module.exports = router;
