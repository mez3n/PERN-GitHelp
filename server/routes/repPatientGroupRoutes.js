const express = require("express");
const repPatientGroupController = require("../controllers/repPatientGroupController");
const repPatientGroupValidations = require("../models/repPatientGroupValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();

// Create a new rep-patient-group
router.post(
  "/",
  repPatientGroupValidations,
  handleValidationErrors,
  repPatientGroupController.createRepPatientGroup
);

module.exports = router;
