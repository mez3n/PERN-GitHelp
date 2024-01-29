const express = require("express");
const representativesController = require("../controllers/representativesController");
const representativesValidations = require("../models/representativesValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware.js");
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
