const express = require("express");
const volunteerRequestsPostmanController = require("../controllers/volunteerRequestsPostmanController");
const volunteerRequestsPostmanValidations = require("../validations/volunteerRequestsPostmanValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();

// Create a new volunteer-requests-postman
router.post(
  "/",
  volunteerRequestsPostmanValidations,
  handleValidationErrors,
  volunteerRequestsPostmanController.createVolunteerRequestsPostman
);

module.exports = router;
