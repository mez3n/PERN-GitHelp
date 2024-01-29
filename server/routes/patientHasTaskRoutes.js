const express = require("express");
const patientHasTaskController = require("../controllers/patientHasTaskController");
const patientHasTaskValidations = require("../models/patientHasTaskValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
  const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();

// Get all patient has tasks
router.get("/", patientHasTaskController.getAllPatientHasTasks);

// Get patient has task by ID
router.get(
  "/:uid/:GID/:task_id/:rep_id",
  patientHasTaskController.getPatientHasTaskById
);
// Get all tasks for patient

router.get("/:uid",patientHasTaskController.getPatientHasTaskALLById);

// Create a new patient has task
router.post(
  "/",
  patientHasTaskValidations,
  handleValidationErrors,
  patientHasTaskController.createPatientHasTask
);

// Update patient has task by ID
router.put(
  "/:uid/:GID/:task_id/:rep_id",
  patientHasTaskValidations,
  handleValidationErrors,
  patientHasTaskController.updatePatientHasTask
);

// Delete patient has task by ID
router.delete(
  "/:uid/:GID/:task_id/:rep_id",
  patientHasTaskController.deletePatientHasTask
);

module.exports = router;
