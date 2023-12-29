const pool = require("../DB/db");

class RepPatientGroup {
  static async getAllRepPatientGroups() {
    const result = await pool.query("SELECT * FROM rep_patient_group");
    return result.rows;
  }

  static async getRepPatientGroupById(patient_id, GID, rep_id) {
    const result = await pool.query(
      "SELECT * FROM rep_patient_group WHERE patient_id = $1 AND GID = $2 AND rep_id = $3",
      [patient_id, GID, rep_id]
    );
    return result.rows[0];
  }
  static async getRepPatientGroupAllPatientsById(rep_id) {
    const result = await pool.query(
      `SELECT * FROM rep_patient_group as rpg
      join users as u on u.uid = rpg.patient_id
      where rep_id = $1
      `,
      [rep_id]
    );
    return result.rows[0];
  }

  static async createRepPatientGroup(newGroup) {
    const result = await pool.query(
      "INSERT INTO rep_patient_group(patient_id, GID, rep_id) VALUES($1, $2, $3) RETURNING *",
      [newGroup.patient_id, newGroup.GID, newGroup.rep_id]
    );

    return result.rows[0];
  }

  static async deleteRepPatientGroup(patient_id, GID, rep_id) {
    const result = await pool.query(
      "DELETE FROM rep_patient_group WHERE patient_id = $1 AND GID = $2 AND rep_id = $3 RETURNING *",
      [patient_id, GID, rep_id]
    );
    return result.rows[0];
  }
}

module.exports = RepPatientGroup;
