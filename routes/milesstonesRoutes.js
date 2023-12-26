const express = require("express");
const milestonesController = require("../controllers/milesstonesController");
const milestonesValidations = require("../models/milestonesValidations");

const router = express.Router();

// Get all milestones
router.get("/", milestonesController.getAllMilestones);

// Get a specific milestone by ID
router.get("/:msid", milestonesController.getMilestoneById);

// Create a new milestone
router.post("/", milestonesValidations, milestonesController.createMilestone);

// Update a milestone by ID
router.put(
  "/:msid",
  milestonesValidations,
  milestonesController.updateMilestone
);

// Delete a milestone by ID
router.delete("/:msid", milestonesController.deleteMilestone);

module.exports = router;
