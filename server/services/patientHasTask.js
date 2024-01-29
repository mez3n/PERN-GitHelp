const pool = require("../DB/db");

class PatientHasTask {
  static async getAllPatientHasTasks() {
    const result = await pool.query("SELECT * FROM patient_has_task");
    return result.rows;
  }

  static async getPatientHasTaskById(uid, GID, task_id, rep_id) {
    const result = await pool.query(
      "SELECT * FROM patient_has_task WHERE uid = $1 AND GID = $2 AND task_id = $3 AND rep_id = $4",
      [uid, GID, task_id, rep_id]
    );
    return result.rows[0];
  }
  static async getPatientHasTaskAllById(uid) {
    const query = `
      SELECT *
      FROM patient_has_task AS pht
      JOIN tasks AS t ON t.task_id = pht.task_id
      JOIN "Group" AS g ON g.gid = pht.GID
      JOIN users AS u ON u.uid = pht.rep_id
      WHERE pht.uid = $1;
    `;
    const result = await pool.query(query, [uid]);
    return result.rows;
  }

  static async createPatientHasTask(newTask) {
    const result = await pool.query(
      "INSERT INTO patient_has_task(uid, GID, state, task_id, rep_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [newTask.uid, newTask.GID, newTask.state, newTask.task_id, newTask.rep_id]
    );

    return result.rows[0];
  }

  static async updatePatientHasTask(uid, GID, task_id, rep_id, updatedTask) {
    const result = await pool.query(
      "UPDATE patient_has_task SET state = $1 WHERE uid = $2 AND GID = $3 AND task_id = $4 AND rep_id = $5 RETURNING *",
      [updatedTask.state, uid, GID, task_id, rep_id]
    );

    return result.rows[0];
  }

  static async deletePatientHasTask(uid, GID, task_id, rep_id) {
    const result = await pool.query(
      "DELETE FROM patient_has_task WHERE uid = $1 AND GID = $2 AND task_id = $3 AND rep_id = $4 RETURNING *",
      [uid, GID, task_id, rep_id]
    );
    return result.rows[0];
  }
}

module.exports = PatientHasTask;
