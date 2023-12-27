const express = require("express");
const eventsController = require("../controllers/eventsController");
const eventsValidations = require("../models/eventsValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();

// Get all events
router.get("/:event_owner_id", eventsController.getAllEvents);

// Create a new event
router.post(
  "/",
  eventsValidations,
  handleValidationErrors,
  eventsController.createEvent
);

// Update an event by ID
router.put(
  "/:eid/:event_owner_id",
  eventsValidations,
  handleValidationErrors,
  eventsController.updateEvent
);

// Delete an event by ID
router.delete("/:eid/:event_owner_id", eventsController.deleteEvent);

module.exports = router;
