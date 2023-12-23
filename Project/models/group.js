const pool = require("../DB/db");

class Group {
  static async getAllGroups() {
    const result = await pool.query('SELECT * FROM "Group"');
    return result.rows;
  }

  static async getGroupById(groupId) {
    const result = await pool.query('SELECT * FROM "Group" WHERE GID = $1', [
      groupId,
    ]);
    return result.rows[0];
  }

  static async createGroup(newGroup) {
    const result = await pool.query(
      'INSERT INTO "Group" (description, name) VALUES ($1, $2) RETURNING *',
      [newGroup.description, newGroup.name]
    );

    return result.rows[0];
  }

  static async updateGroup(groupId, updatedGroup) {
    const result = await pool.query(
      'UPDATE "Group" SET description = $2, name = $3 WHERE GID = $1 RETURNING *',
      [groupId, updatedGroup.description, updatedGroup.name]
    );

    return result.rows[0];
  }

  static async deleteGroup(groupId) {
    const result = await pool.query(
      'DELETE FROM "Group" WHERE GID = $1 RETURNING *',
      [groupId]
    );
    return result.rows[0];
  }
}

module.exports = Group;
