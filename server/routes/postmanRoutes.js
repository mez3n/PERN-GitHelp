const express = require("express");
const postmanController = require("../controllers/postmanController");
const postmanValidations = require("../models/postmanValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
  const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();

// Get all postmen
router.get("/", postmanController.getAllPostmen);

// Get a specific postman by ID
router.get("/:id", postmanController.getPostmanById);

// Create a new postman
router.post(
  "/",
  postmanValidations,
  handleValidationErrors,
  postmanController.createPostman
);

// Update a postman by ID
router.put(
  "/:id",
  postmanValidations,
  handleValidationErrors,
  postmanController.updatePostman
);

// Delete a postman by ID
router.delete("/:id", postmanController.deletePostman);

module.exports = router;
