const express = require("express");
const volunteerController = require("../controllers/volunteerController");

const router = express.Router();

// Get all volunteers
router.get("/", volunteerController.getAllVolunteers);

// Get a specific volunteer by ID
router.get("/:uid/:gcid", volunteerController.getVolunteerById);

// Create a new volunteer
router.post("/", volunteerController.createVolunteer);

// Update a volunteer by ID
router.put("/:uid/:gcid", volunteerController.updateVolunteer);

// Delete a volunteer by ID
router.delete("/:uid/:gcid", volunteerController.deleteVolunteer);

module.exports = router;
