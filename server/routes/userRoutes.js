const express = require("express");
const userController = require("../controllers/userController.js");
const usersValidations = require("../models/usersValidations.js");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware.js");
// Get all users
router.get("/", userController.getAllUsers);

// Get a specific user by ID
router.get("/:id", userController.getUserById);

// Create a new user
router.post(
  "/",
  usersValidations,
  handleValidationErrors,
  userController.createUser
);
router.put("/bio/:id", handleValidationErrors, userController.updateUserBio);
// Update a user by ID
router.put(
  "/:id",
  usersValidations,
  handleValidationErrors,
  userController.updateUser
);

// Delete a user by ID
router.delete("/:id", userController.deleteUser);

module.exports = router;
