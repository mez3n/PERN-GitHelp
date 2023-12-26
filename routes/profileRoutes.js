const express = require("express");
const profileController = require("../controllers/profileController");
const profileValidations = require("../models/profileValidations");

const router = express.Router();

// Get profile by user ID
router.get("/:id", profileController.getProfileByUserId);

// Create a new profile for a user
router.post("/:id", profileValidations, profileController.createProfile);

// Update a profile by user ID
router.put("/:id", profileValidations, profileController.updateProfile);

// Delete a profile by user ID
router.delete("/:id", profileController.deleteProfile);

module.exports = router;
