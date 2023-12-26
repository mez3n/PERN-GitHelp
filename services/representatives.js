const pool = require("../DB/db");

class Representatives {
  static async getAllRepresentatives() {
    const result = await pool.query("SELECT * FROM Representatives");
    return result.rows;
  }

  static async getRepresentativeById(repId) {
    const result = await pool.query(
      "SELECT * FROM Representatives WHERE rep_id = $1",
      [repId]
    );
    return result.rows[0];
  }

  static async createRepresentative(newRepresentative) {
    const result = await pool.query(
      "INSERT INTO Representatives(name, phone_number, uid) VALUES($1, $2, $3) RETURNING *",
      [
        newRepresentative.name,
        newRepresentative.phone_number,
        newRepresentative.uid,
      ]
    );

    return result.rows[0];
  }

  static async updateRepresentative(repId, updatedRepresentative) {
    const result = await pool.query(
      "UPDATE Representatives SET name = $2, phone_number = $3, uid = $4 WHERE rep_id = $1 RETURNING *",
      [
        repId,
        updatedRepresentative.name,
        updatedRepresentative.phone_number,
        updatedRepresentative.uid,
      ]
    );

    return result.rows[0];
  }

  static async deleteRepresentative(repId) {
    const result = await pool.query(
      "DELETE FROM Representatives WHERE rep_id = $1 RETURNING *",
      [repId]
    );
    return result.rows[0];
  }
}

module.exports = Representatives;
