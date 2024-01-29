const express = require("express");
const volunteerApplyServiceController = require("../controllers/volunteerApplyServiceController");
const volunteerApplyServiceValidations = require("../models/volunteerApplyServiceValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware.js");
// Create a new volunteer-apply-service
router.post(
  "/",
  volunteerApplyServiceValidations,
  handleValidationErrors,
  authMiddleware,
  isVolunteerMiddleware,
  volunteerApplyServiceController.createVolunteerApplyService
);

module.exports = router;
