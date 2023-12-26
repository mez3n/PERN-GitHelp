const express = require("express");
const volunteerApplyServiceController = require("../controllers/volunteerApplyServiceController");
const volunteerApplyServiceValidations = require("../models/volunteerApplyServiceValidations");

const router = express.Router();

// Get all applications
router.get("/", volunteerApplyServiceController.getAllApplications);

// Get a specific application by ID
router.get(
  "/:serviceId/:ppid/:pfid/:uid",
  volunteerApplyServiceController.getApplicationById
);

// Create a new application
router.post(
  "/",
  volunteerApplyServiceValidations,
  volunteerApplyServiceController.createApplication
);

// Update an application by ID
router.put(
  "/:serviceId/:ppid/:pfid/:uid",
  volunteerApplyServiceValidations,
  volunteerApplyServiceController.updateApplication
);

// Delete an application by ID
router.delete(
  "/:serviceId/:ppid/:pfid/:uid",
  volunteerApplyServiceController.deleteApplication
);

module.exports = router;
