const express = require("express");
const patientJoinsGroupController = require("../controllers/patientJoinsGroupController");

const router = express.Router();

// Get all Patient-Joined Groups
router.get("/", patientJoinsGroupController.getAllPatientJoinsGroups);

// Get a Patient-Joined Group by ID
router.get(
  "/:userId/:groupId",
  patientJoinsGroupController.getPatientJoinsGroupById
);

// Create a new Patient-Joined Group
router.post("/", patientJoinsGroupController.createPatientJoinsGroup);

// Update a Patient-Joined Group by ID
router.put(
  "/:userId/:groupId",
  patientJoinsGroupController.updatePatientJoinsGroup
);

// Delete a Patient-Joined Group by ID
router.delete(
  "/:userId/:groupId",
  patientJoinsGroupController.deletePatientJoinsGroup
);

module.exports = router;
