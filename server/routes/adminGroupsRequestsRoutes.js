const express = require("express");
const adminGroupsRequestsController = require("../controllers/adminGroupsRequestsController");
const adminGroupsRequestsValidations = require("../validations/adminGroupsRequestsValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();

// Create a new admin-groups-request
router.post(
  "/",
  adminGroupsRequestsValidations,
  handleValidationErrors,
  adminGroupsRequestsController.createAdminGroupsRequest
);

module.exports = router;
