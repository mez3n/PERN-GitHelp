const express = require("express");
const patientHasTaskController = require("../controllers/patientHasTaskController");
const patientHasTaskValidations = require("../validations/patientHasTaskValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();

// Create a new patient-has-task
router.post(
  "/",
  patientHasTaskValidations,
  handleValidationErrors,
  patientHasTaskController.createPatientHasTask
);

module.exports = router;
