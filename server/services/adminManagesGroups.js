const pool = require("../DB/db");

class AdminManagesGroups {
  static async getAllAdminManagesGroups() {
    const result = await pool.query("SELECT * FROM admin_manages_groups");
    return result.rows;
  }

  static async getAdminManagesGroupsById(adminId, groupId) {
    const result = await pool.query(
      "SELECT * FROM admin_manages_groups WHERE A_ID = $1 AND GID = $2",
      [adminId, groupId]
    );
    return result.rows[0];
  }
  static async getAdminManagesGroupsById(groupId) {
    const result = await pool.query(
      "SELECT * FROM admin_manages_groups WHERE GID = $1",
      [groupId]
    );
    return result.rows[0];
  }
  static async createAdminManagesGroups(newAdminManagesGroups) {
    const result = await pool.query(
      "INSERT INTO admin_manages_groups(A_ID, GID) VALUES($1, $2) RETURNING *",
      [newAdminManagesGroups.A_ID, newAdminManagesGroups.GID]
    );

    return result.rows[0];
  }

  static async updateAdminManagesGroups(
    adminId,
    groupId,
    updatedAdminManagesGroups
  ) {
    const result = await pool.query(
      "UPDATE admin_manages_groups SET A_ID = $3, GID = $4 WHERE A_ID = $1 AND GID = $2 RETURNING *",
      [
        adminId,
        groupId,
        updatedAdminManagesGroups.A_ID,
        updatedAdminManagesGroups.GID,
      ]
    );

    return result.rows[0];
  }

  static async deleteAdminManagesGroups(adminId, groupId) {
    const result = await pool.query(
      "DELETE FROM admin_manages_groups WHERE A_ID = $1 AND GID = $2 RETURNING *",
      [adminId, groupId]
    );
    return result.rows[0];
  }
}

module.exports = AdminManagesGroups;
