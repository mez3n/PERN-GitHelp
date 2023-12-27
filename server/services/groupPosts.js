const pool = require("../DB/db");

class GroupPosts {
  static async getAllGroupPosts() {
    const result = await pool.query("SELECT * FROM group_posts");
    return result.rows;
  }

  static async getGroupPostById(gpid, GID) {
    const result = await pool.query(
      "SELECT * FROM group_posts WHERE gpid = $1 AND GID = $2",
      [gpid, GID]
    );
    return result.rows[0];
  }

  static async createGroupPost(newGroupPost) {
    const result = await pool.query(
      "INSERT INTO group_posts(date, text, GID, uid, image_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        newGroupPost.date,
        newGroupPost.text,
        newGroupPost.GID,
        newGroupPost.uid,
        newGroupPost.image_id,
      ]
    );

    return result.rows[0];
  }

  static async updateGroupPost(gpid, GID, updatedGroupPost) {
    const result = await pool.query(
      "UPDATE group_posts SET date = $2, text = $3, GID = $4, uid = $5, image_id = $6 WHERE gpid = $1 RETURNING *",
      [
        gpid,
        updatedGroupPost.date,
        updatedGroupPost.text,
        updatedGroupPost.GID,
        updatedGroupPost.uid,
        updatedGroupPost.image_id,
      ]
    );

    return result.rows[0];
  }

  static async deleteGroupPost(gpid, GID) {
    const result = await pool.query(
      "DELETE FROM group_posts WHERE gpid = $1 AND GID = $2 RETURNING *",
      [gpid, GID]
    );
    return result.rows[0];
  }
}

module.exports = GroupPosts;
