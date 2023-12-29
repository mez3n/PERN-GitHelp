const express = require("express");
const groupUserController = require("../controllers/groupUserController");

const router = express.Router();

// Get all group users
router.get("/", groupUserController.getAllGroupUsers);

// Get group user by ID
router.get("/:id", groupUserController.getGroupUserById);

// Create a new group user
router.post("/", groupUserController.createGroupUser);

// Update group user by ID
router.put("/:id", groupUserController.updateGroupUser);

// Delete group user by ID
router.delete("/:id", groupUserController.deleteGroupUser);

module.exports = router;
