const pool = require("../DB/db");

class VolunteerJoinsGroups {
  static async getAllJoins() {
    const result = await pool.query("SELECT * FROM volunteer_joins_groups");
    return result.rows;
  }

  static async getJoinById(uid, gid) {
    const result = await pool.query(
      "SELECT * FROM volunteer_joins_groups WHERE uid = $1 AND gid = $2",
      [uid, gid]
    );
    return result.rows[0];
  }

  static async createJoin(newJoin) {
    const result = await pool.query(
      "INSERT INTO volunteer_joins_groups(uid, gid) VALUES($1, $2) RETURNING *",
      [newJoin.uid, newJoin.gid]
    );

    return result.rows[0];
  }

  static async updateJoin(uid, gid, updatedJoin) {
    const result = await pool.query(
      "UPDATE volunteer_joins_groups SET uid = $2, gid = $3 WHERE uid = $1 AND gid = $4 RETURNING *",
      [uid, updatedJoin.uid, updatedJoin.gid, gid]
    );

    return result.rows[0];
  }

  static async deleteJoin(uid, gid) {
    const result = await pool.query(
      "DELETE FROM volunteer_joins_groups WHERE uid = $1 AND gid = $2 RETURNING *",
      [uid, gid]
    );
    return result.rows[0];
  }
}

module.exports = VolunteerJoinsGroups;
