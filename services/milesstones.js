const pool = require("../DB/db");

class Milestones {
  static async getAllMilestones() {
    const result = await pool.query("SELECT * FROM milestones");
    return result.rows;
  }

  static async getMilestoneById(msid) {
    const result = await pool.query(
      "SELECT * FROM milestones WHERE msid = $1",
      [msid]
    );
    return result.rows[0];
  }

  static async createMilestone(newMilestone) {
    const result = await pool.query(
      "INSERT INTO milestones(streak, uid, GID) VALUES($1, $2, $3) RETURNING *",
      [newMilestone.streak, newMilestone.uid, newMilestone.GID]
    );

    return result.rows[0];
  }

  static async updateMilestone(msid, updatedMilestone) {
    const result = await pool.query(
      "UPDATE milestones SET streak = $2, uid = $3, GID = $4 WHERE msid = $1 RETURNING *",
      [
        msid,
        updatedMilestone.streak,
        updatedMilestone.uid,
        updatedMilestone.GID,
      ]
    );

    return result.rows[0];
  }

  static async deleteMilestone(msid) {
    const result = await pool.query(
      "DELETE FROM milestones WHERE msid = $1 RETURNING *",
      [msid]
    );
    return result.rows[0];
  }
}

module.exports = Milestones;
