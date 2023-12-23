const Messages = require("../models/messages");

const messagesController = {
  getAllMessages: async (req, res) => {
    try {
      const messages = await Messages.getAllMessages();
      res.json({ messages });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getMessageById: async (req, res) => {
    const mid = req.params.mid;

    try {
      const message = await Messages.getMessageById(mid);

      if (message) {
        res.json(message);
      } else {
        res.status(404).json({ error: "Message not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createMessage: async (req, res) => {
    const newMessage = req.body;

    try {
      const createdMessage = await Messages.createMessage(newMessage);
      res.status(201).json(createdMessage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateMessage: async (req, res) => {
    const mid = req.params.mid;
    const updatedMessage = req.body;

    try {
      const message = await Messages.updateMessage(mid, updatedMessage);

      if (message) {
        res.json(message);
      } else {
        res.status(404).json({ error: "Message not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteMessage: async (req, res) => {
    const mid = req.params.mid;

    try {
      const deletedMessage = await Messages.deleteMessage(mid);

      if (deletedMessage) {
        res.json({ message: "Message deleted successfully" });
      } else {
        res.status(404).json({ error: "Message not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = messagesController;
