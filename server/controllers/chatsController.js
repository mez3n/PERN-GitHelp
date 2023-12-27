const Chats = require("../services/chats");

const chatsController = {
  getAllChats: async (req, res) => {
    try {
      const chats = await Chats.getAllChats();
      res.json({ chats });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getChatsById: async (req, res) => {
    const chatId = req.params.chatId;
    const groupId = req.params.groupId;

    try {
      const chat = await Chats.getChatsById(chatId, groupId);

      if (chat) {
        res.json(chat);
      } else {
        res.status(404).json({ error: "Chat not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createChats: async (req, res) => {
    const newChat = req.body;

    try {
      const createdChat = await Chats.createChats(newChat);
      res.status(201).json(createdChat);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateChats: async (req, res) => {
    const chatId = req.params.chatId;
    const groupId = req.params.groupId;
    const updatedChat = req.body;

    try {
      const chat = await Chats.updateChats(chatId, groupId, updatedChat);

      if (chat) {
        res.json(chat);
      } else {
        res.status(404).json({ error: "Chat not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteChats: async (req, res) => {
    const chatId = req.params.chatId;
    const groupId = req.params.groupId;

    try {
      const deletedChat = await Chats.deleteChats(chatId, groupId);

      if (deletedChat) {
        res.json({ message: "Chat deleted successfully" });
      } else {
        res.status(404).json({ error: "Chat not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = chatsController;
