const express = require("express");
const volunteerRequestsRepresentativesController = require("../controllers/volunteerRequestsRepresentativesController");

const router = express.Router();

// Get all requests
router.get("/", volunteerRequestsRepresentativesController.getAllRequests);

// Get a specific request by ID
router.get(
  "/:uid/:rep_id",
  volunteerRequestsRepresentativesController.getRequestById
);

// Create a new request
router.post("/", volunteerRequestsRepresentativesController.createRequest);

// Delete a request by ID
router.delete(
  "/:uid/:rep_id",
  volunteerRequestsRepresentativesController.deleteRequest
);

module.exports = router;
