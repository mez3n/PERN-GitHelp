const express = require("express");
const patientController = require("../controllers/patientController");
const patientValidations = require("../models/patientValidations");

const router = express.Router();

// Get all Patients
router.get("/", patientController.getAllPatients);

// Get a Patient by ID
router.get("/:userId", patientController.getPatientById);

// Create a new Patient
router.post("/", patientValidations, patientController.createPatient);

// Update a Patient by ID
router.put("/:userId", patientValidations, patientController.updatePatient);

// Delete a Patient by ID
router.delete("/:userId", patientController.deletePatient);

module.exports = router;
