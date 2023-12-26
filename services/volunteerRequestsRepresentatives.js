const pool = require("../DB/db");

class VolunteerRequestsRepresentatives {
  static async getAllRequests() {
    const result = await pool.query(
      "SELECT * FROM volunteer_requests_representatives"
    );
    return result.rows;
  }

  static async getRequestById(uid, repId) {
    const result = await pool.query(
      "SELECT * FROM volunteer_requests_representatives WHERE uid = $1 AND rep_id = $2",
      [uid, repId]
    );
    return result.rows[0];
  }

  static async createRequest(newRequest) {
    const result = await pool.query(
      "INSERT INTO volunteer_requests_representatives(uid, rep_id) VALUES($1, $2) RETURNING *",
      [newRequest.uid, newRequest.rep_id]
    );

    return result.rows[0];
  }

  static async deleteRequest(uid, repId) {
    const result = await pool.query(
      "DELETE FROM volunteer_requests_representatives WHERE uid = $1 AND rep_id = $2 RETURNING *",
      [uid, repId]
    );
    return result.rows[0];
  }
}

module.exports = VolunteerRequestsRepresentatives;
