const express = require("express");
const serviceController = require("../controllers/serviceController");
const serviceValidations = require("../models/serviceValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();

// Get all services
router.get("/", serviceController.getAllServices);

// Get a specific service by ID
router.get("/:serviceId/:ppid/:pfid", serviceController.getServiceById);

// Create a new service
router.post(
  "/",
  serviceValidations,
  handleValidationErrors,
  serviceController.createService
);

// Update a service by ID
router.put(
  "/:serviceId/:ppid/:pfid",
  handleValidationErrors,
  serviceValidations,
  serviceController.updateService
);

// Delete a service by ID
router.delete("/:serviceId/:ppid/:pfid", serviceController.deleteService);

module.exports = router;