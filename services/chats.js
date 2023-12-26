const pool = require("../DB/db");

class Chats {
  static async getAllChats() {
    const result = await pool.query("SELECT * FROM Chats");
    return result.rows;
  }

  static async getChatsById(chatId, groupId) {
    const result = await pool.query(
      "SELECT * FROM Chats WHERE chid = $1 AND GID = $2",
      [chatId, groupId]
    );
    return result.rows[0];
  }

  static async createChats(newChat) {
    const result = await pool.query(
      "INSERT INTO Chats(chid, GID) VALUES($1, $2) RETURNING *",
      [newChat.chid, newChat.GID]
    );

    return result.rows[0];
  }

  static async updateChats(chatId, groupId, updatedChat) {
    const result = await pool.query(
      "UPDATE Chats SET chid = $1 WHERE GID = $2 AND chid = $3 RETURNING *",
      [updatedChat.chid, groupId, chatId]
    );

    return result.rows[0];
  }

  static async deleteChats(chatId, groupId) {
    const result = await pool.query(
      "DELETE FROM Chats WHERE chid = $1 AND GID = $2 RETURNING *",
      [chatId, groupId]
    );
    return result.rows[0];
  }
}

module.exports = Chats;
