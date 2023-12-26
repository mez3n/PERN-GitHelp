const pool = require("../DB/db");

class PersonalPosts {
  static async getAllPersonalPosts() {
    const result = await pool.query("SELECT * FROM personal_posts");
    return result.rows;
  }

  static async getPersonalPostsById(ppid, pfid) {
    const result = await pool.query(
      "SELECT * FROM personal_posts WHERE ppid = $1 AND pfid = $2",
      [ppid, pfid]
    );
    return result.rows[0];
  }

  static async createPersonalPosts(newPost) {
    const result = await pool.query(
      "INSERT INTO personal_posts(ppid, date, text, pfid, image_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [newPost.ppid, newPost.date, newPost.text, newPost.pfid, newPost.image_id]
    );

    return result.rows[0];
  }

  static async updatePersonalPosts(ppid, pfid, updatedPost) {
    const result = await pool.query(
      "UPDATE personal_posts SET date = $2, text = $3, image_id = $4 WHERE pfid = $5 AND ppid = $1 RETURNING *",
      [ppid, updatedPost.date, updatedPost.text, updatedPost.image_id, pfid]
    );

    return result.rows[0];
  }

  static async deletePersonalPosts(ppid, pfid) {
    const result = await pool.query(
      "DELETE FROM personal_posts WHERE ppid = $1 AND pfid = $2 RETURNING *",
      [ppid, pfid]
    );
    return result.rows[0];
  }
}

module.exports = PersonalPosts;
