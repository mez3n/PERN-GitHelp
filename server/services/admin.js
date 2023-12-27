const pool = require("../DB/db");

class Admin {
  static async getAllAdmins() {
    const result = await pool.query("SELECT * FROM Admin");
    return result.rows;
  }

  static async getAdminById(adminId) {
    const result = await pool.query("SELECT * FROM Admin WHERE A_ID = $1", [
      adminId,
    ]);
    return result.rows[0];
  }

  static async createAdmin(newAdmin) {
    const result = await pool.query(
      "INSERT INTO Admin(password, username) VALUES($1, $2) RETURNING *",
      [newAdmin.password, newAdmin.username]
    );

    return result.rows[0];
  }

  static async updateAdmin(adminId, updatedAdmin) {
    const result = await pool.query(
      "UPDATE Admin SET password = $2, username = $3 WHERE A_ID = $1 RETURNING *",
      [adminId, updatedAdmin.password, updatedAdmin.username]
    );

    return result.rows[0];
  }

  static async deleteAdmin(adminId) {
    const result = await pool.query(
      "DELETE FROM Admin WHERE A_ID = $1 RETURNING *",
      [adminId]
    );
    return result.rows[0];
  }
}

module.exports = Admin;
