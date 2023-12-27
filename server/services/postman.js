const pool = require("../DB/db");

class Postman {
  static async getAllPostmen() {
    const result = await pool.query("SELECT * FROM postman");
    return result.rows;
  }

  static async getPostmanById(postmanId) {
    const result = await pool.query("SELECT * FROM postman WHERE p_id = $1", [
      postmanId,
    ]);
    return result.rows[0];
  }

  static async createPostman(newPostman) {
    const result = await pool.query(
      "INSERT INTO postman(p_id, oid) VALUES($1, $2) RETURNING *",
      [newPostman.p_id, newPostman.oid]
    );

    return result.rows[0];
  }

  static async updatePostman(postmanId, updatedPostman) {
    const result = await pool.query(
      "UPDATE postman SET oid = $2 WHERE p_id = $1 RETURNING *",
      [postmanId, updatedPostman.oid]
    );

    return result.rows[0];
  }

  static async deletePostman(postmanId) {
    const result = await pool.query(
      "DELETE FROM postman WHERE p_id = $1 RETURNING *",
      [postmanId]
    );
    return result.rows[0];
  }
}

module.exports = Postman;
