const express = require("express");
const repPatientGroupController = require("../controllers/repPatientGroupController");
const repPatientGroupValidations = require("../models/repPatientGroupValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();

// Get all rep patient groups
router.get("/", repPatientGroupController.getAllRepPatientGroups);

// Get rep patient group by ID
router.get(
  "/:patient_id/:GID/:rep_id",
  repPatientGroupController.getRepPatientGroupById
);

// Get all patient for rep
router.get(
  "/:rep_id",
  repPatientGroupController.getRepPatientGroupAllPatientsById
);

// Create a new rep patient group
router.post(
  "/",
  repPatientGroupValidations,
  handleValidationErrors,
  repPatientGroupController.createRepPatientGroup
);

// Delete rep patient group by ID
router.delete(
  "/:patient_id/:GID/:rep_id",
  repPatientGroupController.deleteRepPatientGroup
);

module.exports = router;
