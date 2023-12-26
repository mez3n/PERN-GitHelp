const express = require("express");
const groupController = require("../controllers/groupController");
const groupValidations = require("../models/groupValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();

// Get all groups
router.get("/", groupController.getAllGroups);

// Get a specific group by ID
router.get("/:id", groupController.getGroupById);

// Create a new group
router.post(
  "/",
  groupValidations,
  handleValidationErrors,
  groupController.createGroup
);

// Update a group by ID
router.put(
  "/:id",
  groupValidations,
  handleValidationErrors,
  groupController.updateGroup
);

// Delete a group by ID
router.delete("/:id", groupController.deleteGroup);

module.exports = router;
