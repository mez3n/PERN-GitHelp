const pool = require("../DB/db");

class Patient {
  static async getAllPatients() {
    const result = await pool.query("SELECT * FROM Patient");
    return result.rows;
  }

  static async getPatientById(userId) {
    const result = await pool.query("SELECT * FROM Patient WHERE uid = $1", [
      userId,
    ]);
    return result.rows[0];
  }

  static async createPatient(newPatient) {
    const result = await pool.query(
      "INSERT INTO Patient(uid) VALUES($1) RETURNING *",
      [newPatient.uid]
    );

    return result.rows[0];
  }

  static async updatePatient(userId, updatedPatient) {
    const result = await pool.query(
      "UPDATE Patient SET uid = $2 WHERE uid = $1 RETURNING *",
      [userId, updatedPatient.uid]
    );

    return result.rows[0];
  }

  static async deletePatient(userId) {
    const result = await pool.query(
      "DELETE FROM Patient WHERE uid = $1 RETURNING *",
      [userId]
    );
    return result.rows[0];
  }
}

module.exports = Patient;
