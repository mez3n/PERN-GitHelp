const express = require("express");
const patientJoinsGroupController = require("../controllers/patientJoinsGroupController");
const patientJoinsGroupValidations = require("../models/patientJoinsGroupValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
  const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();

// Get all Patient-Joined Groups
router.get("/", patientJoinsGroupController.getAllPatientJoinsGroups);

// Get a Patient-Joined Group by ID
router.get(
  "/:userId/:groupId",
  patientJoinsGroupController.getPatientJoinsGroupById
);
router.get("/:groupId", patientJoinsGroupController.getPatientsJoinsGroupById);
// Create a new Patient-Joined Group
router.post(
  "/",
  patientJoinsGroupValidations,
  handleValidationErrors,
  patientJoinsGroupController.createPatientJoinsGroup
);

// Update a Patient-Joined Group by ID
router.put(
  "/:userId/:groupId",
  patientJoinsGroupValidations,
  handleValidationErrors,
  patientJoinsGroupController.updatePatientJoinsGroup
);

// Delete a Patient-Joined Group by ID
router.delete(
  "/:userId/:groupId",
  patientJoinsGroupController.deletePatientJoinsGroup
);

module.exports = router;
