const pool = require("../DB/db");

class AdminGroupsRequests {
  static async createAdminGroupsRequest(group_user_id, GID, A_ID, state) {
    const result = await pool.query(
      "INSERT INTO admin_groups_requests(group_user_id, GID, A_ID, state) VALUES($1, $2, $3, $4) RETURNING *",
      [group_user_id, GID, A_ID, state]
    );

    return result.rows[0];
  }
}

module.exports = AdminGroupsRequests;
