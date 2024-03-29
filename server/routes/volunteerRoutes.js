const express = require("express");
const volunteerController = require("../controllers/volunteerController");
const volunteerValidations = require("../models/volunteerValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware.js");
// Get all volunteers
router.get("/", volunteerController.getAllVolunteers);

// Get a specific volunteer by ID
router.get("/:uid/:gcid", volunteerController.getVolunteerById);

// Create a new volunteer
router.post(
  "/",
  volunteerValidations,
  handleValidationErrors,
  volunteerController.createVolunteer
);

// // Update a volunteer by ID
// router.put(
//   "/:uid/:gcid",
//   volunteerValidations,
//   handleValidationErrors,
//   volunteerController.updateVolunteer
// );

// // Delete a volunteer by ID
// router.delete("/:uid/:gcid", volunteerController.deleteVolunteer);

module.exports = router;
