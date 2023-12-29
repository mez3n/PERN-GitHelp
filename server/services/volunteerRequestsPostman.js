const pool = require("../DB/db");

class VolunteerRequestsPostman {
  static async createVolunteerRequestsPostman(uid, p_id) {
    const result = await pool.query(
      "INSERT INTO volunteer_requests_postman(uid, p_id) VALUES($1, $2) RETURNING *",
      [uid, p_id]
    );

    return result.rows[0];
  }
}

module.exports = VolunteerRequestsPostman;
