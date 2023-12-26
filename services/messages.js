const pool = require("../DB/db");

class Messages {
  static async getAllMessages() {
    const result = await pool.query("SELECT * FROM messages");
    return result.rows;
  }

  static async getMessageById(mid) {
    const result = await pool.query("SELECT * FROM messages WHERE mid = $1", [
      mid,
    ]);
    return result.rows[0];
  }

  static async createMessage(newMessage) {
    const result = await pool.query(
      "INSERT INTO messages(date, text, chid, gid, uid, image_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        newMessage.date,
        newMessage.text,
        newMessage.chid,
        newMessage.gid,
        newMessage.uid,
        newMessage.image_id,
      ]
    );

    return result.rows[0];
  }

  static async updateMessage(mid, updatedMessage) {
    const result = await pool.query(
      "UPDATE messages SET date = $2, text = $3, chid = $4, gid = $5, uid = $6, image_id = $7 WHERE mid = $1 RETURNING *",
      [
        mid,
        updatedMessage.date,
        updatedMessage.text,
        updatedMessage.chid,
        updatedMessage.gid,
        updatedMessage.uid,
        updatedMessage.image_id,
      ]
    );

    return result.rows[0];
  }

  static async deleteMessage(mid) {
    const result = await pool.query(
      "DELETE FROM messages WHERE mid = $1 RETURNING *",
      [mid]
    );
    return result.rows[0];
  }
}

module.exports = Messages;
