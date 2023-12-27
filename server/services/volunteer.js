const pool = require("../DB/db");

class Volunteer {
  static async getAllVolunteers() {
    const result = await pool.query("SELECT * FROM volunteer");
    return result.rows;
  }

  static async getVolunteerById(uid) {
    const result = await pool.query("SELECT * FROM volunteer WHERE uid = $1", [
      uid,
    ]);
    return result.rows[0];
  }

  static async createVolunteer(newVolunteer) {
    const result = await pool.query(
      "INSERT INTO volunteer(uid) VALUES($1) RETURNING *",
      [newVolunteer.uid]
    );

    return result.rows[0];
  }

  static async updateVolunteer(uid, updatedVolunteer) {
    const result = await pool.query(
      "UPDATE volunteer SET uid = $2 WHERE uid = $1 RETURNING *",
      [uid, updatedVolunteer.uid]
    );

    return result.rows[0];
  }

  static async deleteVolunteer(uid) {
    const result = await pool.query(
      "DELETE FROM volunteer WHERE uid = $1 RETURNING *",
      [uid]
    );
    return result.rows[0];
  }
}

module.exports = Volunteer;
