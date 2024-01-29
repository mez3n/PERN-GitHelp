const express = require("express");
const adminGroupsRequestsController = require("../controllers/adminGroupsRequestsController");
const adminGroupsRequestsValidations = require("../models/adminGroupsRequestsValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
  const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();

// Create a new admin-groups-request
router.post(
  "/",
  adminGroupsRequestsValidations,
  handleValidationErrors,
  authMiddleware,
  isAdminMiddleware,
  adminGroupsRequestsController.createAdminGroupsRequest
);

module.exports = router;
