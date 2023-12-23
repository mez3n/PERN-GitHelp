const pool = require("../DB/db");

class Volunteer {
  static async getAllVolunteers() {
    const result = await pool.query("SELECT * FROM volunteer");
    return result.rows;
  }

  static async getVolunteerById(uid, gcid) {
    const result = await pool.query(
      "SELECT * FROM volunteer WHERE uid = $1 AND gcid = $2",
      [uid, gcid]
    );
    return result.rows[0];
  }

  static async createVolunteer(newVolunteer) {
    const result = await pool.query(
      "INSERT INTO volunteer(uid, gcid) VALUES($1, $2) RETURNING *",
      [newVolunteer.uid, newVolunteer.gcid]
    );

    return result.rows[0];
  }

  static async updateVolunteer(uid, gcid, updatedVolunteer) {
    const result = await pool.query(
      "UPDATE volunteer SET uid = $2, gcid = $3 WHERE uid = $1 AND gcid = $4 RETURNING *",
      [uid, updatedVolunteer.uid, updatedVolunteer.gcid, gcid]
    );

    return result.rows[0];
  }

  static async deleteVolunteer(uid, gcid) {
    const result = await pool.query(
      "DELETE FROM volunteer WHERE uid = $1 AND gcid = $2 RETURNING *",
      [uid, gcid]
    );
    return result.rows[0];
  }
}

module.exports = Volunteer;
