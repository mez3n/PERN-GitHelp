const pool = require("../DB/db");

class PatientJoinsGroup {
  static async getAllPatientJoinsGroups() {
    const result = await pool.query("SELECT * FROM patient_joins_group");
    return result.rows;
  }

  static async getPatientJoinsGroupById(userId, groupId) {
    const result = await pool.query(
      "SELECT * FROM patient_joins_group WHERE uid = $1 AND GID = $2",
      [userId, groupId]
    );
    return result.rows[0];
  }

  static async createPatientJoinsGroup(newPatientJoinsGroup) {
    const result = await pool.query(
      "INSERT INTO patient_joins_group(uid, GID) VALUES($1, $2) RETURNING *",
      [newPatientJoinsGroup.uid, newPatientJoinsGroup.GID]
    );

    return result.rows[0];
  }

  static async updatePatientJoinsGroup(
    userId,
    groupId,
    updatedPatientJoinsGroup
  ) {
    const result = await pool.query(
      "UPDATE patient_joins_group SET uid = $3, GID = $4 WHERE uid = $1 AND GID = $2 RETURNING *",
      [
        userId,
        groupId,
        updatedPatientJoinsGroup.uid,
        updatedPatientJoinsGroup.GID,
      ]
    );

    return result.rows[0];
  }

  static async deletePatientJoinsGroup(userId, groupId) {
    const result = await pool.query(
      "DELETE FROM patient_joins_group WHERE uid = $1 AND GID = $2 RETURNING *",
      [userId, groupId]
    );
    return result.rows[0];
  }
}

module.exports = PatientJoinsGroup;
