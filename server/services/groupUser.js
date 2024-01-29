const pool = require("../DB/db");

class GroupUser {
  static async getAllGroupUsers() {
    const result = await pool.query("SELECT * FROM group_user");
    return result.rows;
  }

  static async getGroupUserById(userId) {
    const result = await pool.query("SELECT * FROM group_user WHERE uid = $1", [
      userId,
    ]);
    return result.rows[0];
  }

  static async createGroupUser(newUser) {
    const result = await pool.query(
      "INSERT INTO group_user(uid) VALUES($1) RETURNING *",
      [newUser.uid]
    );

    return result.rows[0];
  }

  static async updateGroupUser(userId, updatedUser) {
    const result = await pool.query(
      "UPDATE group_user SET uid = $1 WHERE uid = $2 RETURNING *",
      [updatedUser.uid, userId]
    );

    return result.rows[0];
  }

  static async deleteGroupUser(userId) {
    const result = await pool.query(
      "DELETE FROM group_user WHERE uid = $1 RETURNING *",
      [userId]
    );
    return result.rows[0];
  }
}

module.exports = GroupUser;
