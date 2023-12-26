const pool = require("../DB/db");

class VolunteerApplyService {
  static async getAllApplications() {
    const result = await pool.query("SELECT * FROM volunteer_apply_service");
    return result.rows;
  }

  static async getApplicationById(serviceId, ppid, pfid, uid) {
    const result = await pool.query(
      "SELECT * FROM volunteer_apply_service WHERE service_id = $1 AND ppid = $2 AND pfid = $3 AND uid = $4",
      [serviceId, ppid, pfid, uid]
    );
    return result.rows[0];
  }

  static async createApplication(newApplication) {
    const result = await pool.query(
      "INSERT INTO volunteer_apply_service(amount, service_id, ppid, pfid, uid) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        newApplication.amount,
        newApplication.service_id,
        newApplication.ppid,
        newApplication.pfid,
        newApplication.uid,
      ]
    );

    return result.rows[0];
  }

  static async updateApplication(
    serviceId,
    ppid,
    pfid,
    uid,
    updatedApplication
  ) {
    const result = await pool.query(
      "UPDATE volunteer_apply_service SET amount = $6 WHERE service_id = $1 AND ppid = $2 AND pfid = $3 AND uid = $4 RETURNING *",
      [serviceId, ppid, pfid, uid, updatedApplication.amount]
    );

    return result.rows[0];
  }

  static async deleteApplication(serviceId, ppid, pfid, uid) {
    const result = await pool.query(
      "DELETE FROM volunteer_apply_service WHERE service_id = $1 AND ppid = $2 AND pfid = $3 AND uid = $4 RETURNING *",
      [serviceId, ppid, pfid, uid]
    );
    return result.rows[0];
  }
}

module.exports = VolunteerApplyService;
