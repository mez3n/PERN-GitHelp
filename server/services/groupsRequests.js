const pool = require("../DB/db");

class GroupsRequests {
  static async getAllGroupsRequests() {
    const result = await pool.query("SELECT * FROM groups_requests");
    return result.rows;
  }

  static async getGroupsRequestsById(group_user_id, GID) {
    const result = await pool.query(
      "SELECT * FROM groups_requests WHERE group_user_id = $1 AND GID = $2",
      [group_user_id, GID]
    );
    return result.rows[0];
  }

  static async createGroupsRequests(group_user_id, GID) {
    const result = await pool.query(
      "INSERT INTO groups_requests(group_user_id, GID) VALUES($1, $2) RETURNING *",
      [group_user_id, GID]
    );

    return result.rows[0];
  }

  static async updateGroupsRequests(group_user_id, GID, newState) {
    const result = await pool.query(
      "UPDATE groups_requests SET state = $3 WHERE group_user_id = $1 AND GID = $2 RETURNING *",
      [group_user_id, GID, newState]
    );

    return result.rows[0];
  }
}
