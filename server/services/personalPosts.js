const pool = require("../DB/db");

class PersonalPost {
  static async getAllPersonalPosts() {
    const result = await pool.query("SELECT * FROM personal_posts");
    return result.rows;
  }

  static async getPersonalPostById(ppid, uid) {
    const result = await pool.query(
      "SELECT * FROM personal_posts WHERE ppid = $1 AND uid = $2",
      [ppid, uid]
    );
    return result.rows[0];
  }
  static async getPersonalPostByUserId(uid) {
    const result = await pool.query(
      "SELECT * FROM personal_posts WHERE uid = $1",
      [uid]
    );
    return result.rows[0];
  }

  static async createPersonalPost(newPersonalPost) {
    const result = await pool.query(
      "INSERT INTO personal_posts(ppid, date, text, uid, image_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        newPersonalPost.ppid,
        newPersonalPost.date,
        newPersonalPost.text,
        newPersonalPost.uid,
        newPersonalPost.image_id,
      ]
    );

    return result.rows[0];
  }

  static async updatePersonalPost(ppid, uid, updatedPersonalPost) {
    const result = await pool.query(
      "UPDATE personal_posts SET date = $2, text = $3, image_id = $4 WHERE ppid = $1 AND uid = $5 RETURNING *",
      [
        ppid,
        updatedPersonalPost.date,
        updatedPersonalPost.text,
        updatedPersonalPost.image_id,
        uid,
      ]
    );

    return result.rows[0];
  }

  static async deletePersonalPost(ppid, uid) {
    const result = await pool.query(
      "DELETE FROM personal_posts WHERE ppid = $1 AND uid = $2 RETURNING *",
      [ppid, uid]
    );
    return result.rows[0];
  }
}

module.exports = PersonalPost;
