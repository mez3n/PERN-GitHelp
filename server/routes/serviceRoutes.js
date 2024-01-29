const express = require("express");
const serviceController = require("../controllers/serviceController");
const serviceValidations = require("../models/serviceValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware.js");
// Get all services
router.get("/:event_owner_id", serviceController.getAllServices);

// Create a new service
router.post(
  "/",
  serviceValidations,
  handleValidationErrors,
  serviceController.createService
);

// Update a service by ID
router.put(
  "/:service_id/:eid/:event_owner_id",
  serviceValidations,
  handleValidationErrors,
  serviceController.updateService
);
router.put(
  "/update_endDate/:service_id/:eid/:event_owner_id",
  serviceController.updateServiceEndDate
);
// Delete a service by ID
router.delete(
  "/:service_id/:eid/:event_owner_id",
  serviceController.deleteService
);

module.exports = router;
