const pool = require("../DB/db");

class PersonalComments {
  static async getAllPersonalComments() {
    const result = await pool.query("SELECT * FROM personal_comments");
    return result.rows;
  }

  static async getPersonalCommentById(pcid) {
    const result = await pool.query(
      "SELECT * FROM personal_comments WHERE pcid = $1",
      [pcid]
    );
    return result.rows[0];
  }

  static async createPersonalComment(newPersonalComment) {
    const result = await pool.query(
      "INSERT INTO personal_comments(date, text, ppid, pfid, uid) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        newPersonalComment.date,
        newPersonalComment.text,
        newPersonalComment.ppid,
        newPersonalComment.pfid,
        newPersonalComment.uid,
      ]
    );

    return result.rows[0];
  }

  static async updatePersonalComment(pcid, updatedPersonalComment) {
    const result = await pool.query(
      "UPDATE personal_comments SET date = $2, text = $3, ppid = $4, pfid = $5, uid = $6 WHERE pcid = $1 RETURNING *",
      [
        pcid,
        updatedPersonalComment.date,
        updatedPersonalComment.text,
        updatedPersonalComment.ppid,
        updatedPersonalComment.pfid,
        updatedPersonalComment.uid,
      ]
    );

    return result.rows[0];
  }

  static async deletePersonalComment(pcid) {
    const result = await pool.query(
      "DELETE FROM personal_comments WHERE pcid = $1 RETURNING *",
      [pcid]
    );
    return result.rows[0];
  }
}

module.exports = PersonalComments;
