const pool = require("../DB/db");

class GroupComments {
  static async getAllGroupComments() {
    const result = await pool.query("SELECT * FROM group_comments");
    return result.rows;
  }

  static async getGroupCommentById(gcid) {
    const result = await pool.query(
      "SELECT * FROM group_comments WHERE gcid = $1",
      [gcid]
    );
    return result.rows[0];
  }

  static async createGroupComment(newGroupComment) {
    const result = await pool.query(
      "INSERT INTO group_comments(date, text, gpid, GID, uid) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        newGroupComment.date,
        newGroupComment.text,
        newGroupComment.gpid,
        newGroupComment.GID,
        newGroupComment.uid,
      ]
    );

    return result.rows[0];
  }

  static async updateGroupComment(gcid, updatedGroupComment) {
    const result = await pool.query(
      "UPDATE group_comments SET date = $2, text = $3, gpid = $4, GID = $5, uid = $6 WHERE gcid = $1 RETURNING *",
      [
        gcid,
        updatedGroupComment.date,
        updatedGroupComment.text,
        updatedGroupComment.gpid,
        updatedGroupComment.GID,
        updatedGroupComment.uid,
      ]
    );

    return result.rows[0];
  }

  static async deleteGroupComment(gcid) {
    const result = await pool.query(
      "DELETE FROM group_comments WHERE gcid = $1 RETURNING *",
      [gcid]
    );
    return result.rows[0];
  }
}

module.exports = GroupComments;
