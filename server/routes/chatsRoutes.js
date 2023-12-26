const express = require("express");
const chatsController = require("../controllers/chatsController");
const chatsValidations = require("../models/chatsValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();

// Get all chats
router.get("/", chatsController.getAllChats);

// Get a specific chat by ID
router.get("/:chatId/:groupId", chatsController.getChatsById);

// Create a new chat
router.post(
  "/",
  chatsValidations,
  handleValidationErrors,
  chatsController.createChats
);

// Update a chat by ID
router.put(
  "/:chatId/:groupId",
  chatsValidations,
  handleValidationErrors,
  chatsController.updateChats
);

// Delete a chat by ID
router.delete("/:chatId/:groupId", chatsController.deleteChats);

module.exports = router;
