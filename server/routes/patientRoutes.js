const express = require("express");
const patientController = require("../controllers/patientController");
const patientValidations = require("../models/patientValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();

// Get all Patients
router.get("/", patientController.getAllPatients);

// Get a Patient by ID
router.get("/:userId", patientController.getPatientById);

// Create a new Patient
router.post(
  "/",
  patientValidations,
  handleValidationErrors,
  patientController.createPatient
);

// Update a Patient by ID
router.put(
  "/:userId",
  patientValidations,
  handleValidationErrors,
  patientController.updatePatient
);

// Delete a Patient by ID
router.delete("/:userId", patientController.deletePatient);

module.exports = router;
