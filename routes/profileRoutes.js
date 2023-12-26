const express = require("express");
const profileController = require("../controllers/profileController");
const profileValidations = require("../models/profileValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();

// Get profile by user ID
router.get("/:id", profileController.getProfileByUserId);

// Create a new profile for a user
router.post(
  "/:id",
  profileValidations,
  handleValidationErrors,
  profileController.createProfile
);

// Update a profile by user ID
router.put(
  "/:id",
  profileValidations,
  handleValidationErrors,
  profileController.updateProfile
);

// Delete a profile by user ID
router.delete("/:id", profileController.deleteProfile);

module.exports = router;
