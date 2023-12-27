const express = require("express");
const representativesController = require("../controllers/representativesController");
const representativesValidations = require("../models/representativesValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();

// Get a representative by UID
router.get("/:uid", representativesController.getRepresentativeByUid);

// Create a new representative
router.post(
  "/",
  representativesValidations,
  handleValidationErrors,
  representativesController.createRepresentative
);

// Update a representative by UID
router.put(
  "/:uid",
  representativesValidations,
  handleValidationErrors,
  representativesController.updateRepresentative
);

// Delete a representative by UID
router.delete("/:uid", representativesController.deleteRepresentative);

module.exports = router;
