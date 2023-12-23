const express = require("express");
const serviceController = require("../controllers/serviceController");

const router = express.Router();

// Get all services
router.get("/", serviceController.getAllServices);

// Get a specific service by ID
router.get("/:serviceId/:ppid/:pfid", serviceController.getServiceById);

// Create a new service
router.post("/", serviceController.createService);

// Update a service by ID
router.put("/:serviceId/:ppid/:pfid", serviceController.updateService);

// Delete a service by ID
router.delete("/:serviceId/:ppid/:pfid", serviceController.deleteService);

module.exports = router;
