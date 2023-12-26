const express = require("express");
const messagesController = require("../controllers/messagesController");
const messagesValidations = require("../models/messagesValidations");

const router = express.Router();

// Get all messages
router.get("/", messagesController.getAllMessages);

// Get a specific message by ID
router.get("/:mid", messagesController.getMessageById);

// Create a new message
router.post("/", messagesValidations, messagesController.createMessage);

// Update a message by ID
router.put("/:mid", messagesValidations, messagesController.updateMessage);

// Delete a message by ID
router.delete("/:mid", messagesController.deleteMessage);

module.exports = router;
