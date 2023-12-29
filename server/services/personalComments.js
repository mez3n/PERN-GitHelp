const pool = require("../DB/db");

class PersonalComment {
  static async getAllPersonalComments(ppid, post_owner_uid) {
    const result = await pool.query(
      `SELECT * FROM personal_comments 
      join users as u on u.uid = commenter_uid
      WHERE ppid = $1 AND post_owner_uid = $2`,
      [ppid, post_owner_uid]
    );
    return result.rows;
  }

  static async createPersonalComment(newPersonalComment) {
    const result = await pool.query(
      "INSERT INTO personal_comments(date, text, ppid, post_owner_uid, commenter_uid) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        newPersonalComment.date,
        newPersonalComment.text,
        newPersonalComment.ppid,
        newPersonalComment.post_owner_uid,
        newPersonalComment.commenter_uid,
      ]
    );

    return result.rows[0];
  }

  static async updatePersonalComment(
    ppid,
    pcid,
    post_owner_uid,
    updatedPersonalComment
  ) {
    const result = await pool.query(
      "UPDATE personal_comments SET date = $1, text = $2 WHERE ppid = $3 AND pcid = $4 AND post_owner_uid = $5 RETURNING *",
      [
        updatedPersonalComment.date,
        updatedPersonalComment.text,
        ppid,
        pcid,
        post_owner_uid,
      ]
    );

    return result.rows[0];
  }
  static async currentCommentCount(ppid, post_owner_uid) {
    const result = await pool.query(
      "SELECT COUNT(*) FROM personal_comments WHERE ppid = $1 and post_owner_uid = $2",
      [ppid, post_owner_uid]
    );

    // Ensure there is a result row before accessing the count property
    if (result.rows.length > 0) {
      return result.rows[0].count;
    } else {
      // Return 0 or handle the case when there are no comments
      return 0;
    }
  }

  static async deletePersonalComment(ppid, pcid, post_owner_uid) {
    const result = await pool.query(
      "DELETE FROM personal_comments WHERE ppid = $1 AND pcid = $2 AND post_owner_uid = $3 RETURNING *",
      [ppid, pcid, post_owner_uid]
    );
    return result.rows[0];
  }
}

module.exports = PersonalComment;
