const express = require("express");
const milestonesController = require("../controllers/milesstonesController");
const milestonesValidations = require("../models/milestonesValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
  const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();

// Get all milestones
router.get("/",authMiddleware,isRepresentativeMiddleware, milestonesController.getAllMilestones);

// Get a specific milestone by ID
router.get("/:msid",authMiddleware,isPatientOrRepresentativeMiddleware, milestonesController.getMilestoneById);

// Create a new milestone
router.post(
  "/",
  milestonesValidations,
  handleValidationErrors,
  milestonesController.createMilestone
);

// Update a milestone by ID
router.put(
  "/:msid",
  milestonesValidations,
  handleValidationErrors,
  milestonesController.updateMilestone
);

// Delete a milestone by ID
router.delete("/:msid", milestonesController.deleteMilestone);

module.exports = router;
