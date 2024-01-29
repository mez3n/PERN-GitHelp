const express = require("express");
const adminController = require("../controllers/adminController");
const adminValidations = require("../models/adminValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware.js");
// Get all admins
router.get("/",authMiddleware,isAdminMiddleware,adminController.getAllAdmins);

// Get a specific admin by ID
router.get("/:id",authMiddleware,isAdminMiddleware,adminController.getAdminById);

// Create a new admin
router.post(
  "/",
  adminValidations,
  handleValidationErrors,
  adminController.createAdmin
);

// Update an admin by ID
router.put(
  "/:id",
  adminValidations,
  handleValidationErrors,
  adminController.updateAdmin
);

// Delete an admin by ID
router.delete("/:id", adminController.deleteAdmin);

module.exports = router;
