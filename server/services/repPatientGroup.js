const pool = require("../DB/db");

class RepPatientGroup {
  static async createRepPatientGroup(patientId, GID, repId) {
    const result = await pool.query(
      "INSERT INTO rep_patient_group(patient_id, GID, rep_id) VALUES($1, $2, $3) RETURNING *",
      [patientId, GID, repId]
    );

    return result.rows[0];
  }
}

module.exports = RepPatientGroup;
