const pool = require("../DB/db");

class PatientHasTask {
  static async createPatientHasTask(uid, GID, state, task_id, rep_id) {
    const result = await pool.query(
      "INSERT INTO patient_has_task(uid, GID, state, task_id, rep_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [uid, GID, state, task_id, rep_id]
    );

    return result.rows[0];
  }
}

module.exports = PatientHasTask;
