const pool = require("../DB/db");

class Representative {
  static async getRepresentativeByUid(uid) {
    const result = await pool.query(
      "SELECT * FROM Representative WHERE uid = $1",
      [uid]
    );
    return result.rows[0];
  }

  static async createRepresentative(newRepresentative) {
    const result = await pool.query(
      "INSERT INTO Representative(uid, experiences, GID) VALUES($1, $2, $3) RETURNING *",
      [
        newRepresentative.uid,
        newRepresentative.experiences,
        newRepresentative.GID,
      ]
    );

    return result.rows[0];
  }

  static async updateRepresentative(uid, updatedRepresentative) {
    const result = await pool.query(
      "UPDATE Representative SET experiences = $1, GID = $2 WHERE uid = $3 RETURNING *",
      [updatedRepresentative.experiences, updatedRepresentative.GID, uid]
    );

    return result.rows[0];
  }

  static async deleteRepresentative(uid) {
    const result = await pool.query(
      "DELETE FROM Representative WHERE uid = $1 RETURNING *",
      [uid]
    );
    return result.rows[0];
  }
}

module.exports = Representative;
