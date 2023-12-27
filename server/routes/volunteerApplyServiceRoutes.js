const express = require("express");
const volunteerApplyServiceController = require("../controllers/volunteerApplyServiceController");
const volunteerApplyServiceValidations = require("../validations/volunteerApplyServiceValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();

// Create a new volunteer-apply-service
router.post(
  "/",
  volunteerApplyServiceValidations,
  handleValidationErrors,
  volunteerApplyServiceController.createVolunteerApplyService
);

module.exports = router;
