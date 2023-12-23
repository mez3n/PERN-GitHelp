const pool = require("../DB/db");

class Profile {
  static async getProfileByUserId(userId) {
    const result = await pool.query("SELECT * FROM Profile WHERE uid = $1", [
      userId,
    ]);
    return result.rows[0];
  }

  static async createProfile(userId) {
    const result = await pool.query(
      "INSERT INTO Profile (uid) VALUES ($1) RETURNING *",
      [userId]
    );
    return result.rows[0];
  }

  static async updateProfile(userId, updatedProfile) {
    const result = await pool.query(
      "UPDATE Profile SET uid = $2 WHERE pfid = $1 RETURNING *",
      [userId, updatedProfile.uid]
    );
    return result.rows[0];
  }

  static async deleteProfile(userId) {
    const result = await pool.query(
      "DELETE FROM Profile WHERE pfid = $1 RETURNING *",
      [userId]
    );
    return result.rows[0];
  }
}

module.exports = Profile;
