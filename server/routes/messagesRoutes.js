const express = require("express");
const messagesController = require("../controllers/messagesController");
const messagesValidations = require("../models/messagesValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
  const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();

// Get all messages
router.get("/", messagesController.getAllMessages);

// Get a specific message by ID
router.get("/:mid", messagesController.getMessageById);

// Create a new message
router.post(
  "/",
  messagesValidations,
  handleValidationErrors,
  messagesController.createMessage
);

// Update a message by ID
router.put(
  "/:mid",
  messagesValidations,
  handleValidationErrors,
  messagesController.updateMessage
);

// Delete a message by ID
router.delete("/:mid", messagesController.deleteMessage);

module.exports = router;
