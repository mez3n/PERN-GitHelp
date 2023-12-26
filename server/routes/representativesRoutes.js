const express = require("express");
const representativesController = require("../controllers/representativesController");
const representativesValidations = require("../models/representativesValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();

// Get all representatives
router.get("/", representativesController.getAllRepresentatives);

// Get a specific representative by ID
router.get("/:repId", representativesController.getRepresentativeById);

// Create a new representative
router.post(
  "/",
  representativesValidations,
  handleValidationErrors,
  representativesController.createRepresentative
);

// Update a representative by ID
router.put(
  "/:repId",
  representativesValidations,
  handleValidationErrors,
  representativesController.updateRepresentative
);

// Delete a representative by ID
router.delete("/:repId", representativesController.deleteRepresentative);

module.exports = router;