const express = require("express");
const patientJoinsGroupController = require("../controllers/patientJoinsGroupController");
const patientJoinsGroupValidations = require("../models/patientJoinsGroupValidations");

const router = express.Router();

// Get all Patient-Joined Groups
router.get("/", patientJoinsGroupController.getAllPatientJoinsGroups);

// Get a Patient-Joined Group by ID
router.get(
  "/:userId/:groupId",
  patientJoinsGroupController.getPatientJoinsGroupById
);

// Create a new Patient-Joined Group
router.post(
  "/",
  patientJoinsGroupValidations,
  patientJoinsGroupController.createPatientJoinsGroup
);

// Update a Patient-Joined Group by ID
router.put(
  "/:userId/:groupId",
  patientJoinsGroupValidations,
  patientJoinsGroupController.updatePatientJoinsGroup
);

// Delete a Patient-Joined Group by ID
router.delete(
  "/:userId/:groupId",
  patientJoinsGroupController.deletePatientJoinsGroup
);

module.exports = router;
