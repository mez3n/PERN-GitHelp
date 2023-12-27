const pool = require("../DB/db");

class VolunteerApplyService {
  static async createVolunteerApplyService(
    amount,
    blood_type,
    service_id,
    eid,
    event_owner_id,
    uid
  ) {
    const result = await pool.query(
      "INSERT INTO volunteer_apply_service(amount, blood_type, service_id, eid, event_owner_id, uid) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [amount, blood_type, service_id, eid, event_owner_id, uid]
    );

    return result.rows[0];
  }
}

module.exports = VolunteerApplyService;
