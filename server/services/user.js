const pool = require("../DB/db.js");

class User {
  static async getAllUsers() {
    const result = await pool.query("SELECT * FROM Users");
    return result.rows;
  }

  static async getUserById(userId) {
    const result = await pool.query(
      "SELECT * FROM get_user_by_id($1) AS user_info;",
      [userId]
    );
    return result.rows[0];
  }

  static async createUser(newUser) {
    const result = await pool.query(
      "SELECT * FROM insert_user($1, $2, $3, $4, $5, $6, $7, $8) AS new_user",
      [
        newUser.user_name,
        newUser.name,
        newUser.password,
        newUser.email,
        newUser.phone_number,
        newUser.bio,
        newUser.image_id,
        newUser.type,
      ]
    );

    const uid = result.rows[0].uid;

    if (newUser.type === "organization") {
      await pool.query(
        "INSERT INTO Organization(uid, location) VALUES ($1, $2)",
        [uid, newUser.location]
      );
    } else if (newUser.type === "patient") {
      await pool.query("INSERT INTO group_user(uid) VALUES ($1)", [uid]);
      await pool.query("INSERT INTO patient(uid) VALUES ($1)", [uid]);
    } else if (newUser.type === "representative") {
      await pool.query("INSERT INTO group_user(uid) VALUES ($1)", [uid]);
      await pool.query("INSERT INTO representative(uid) VALUES ($1)", [uid]);
    } else if (newUser.type === "volunteer") {
      await pool.query("INSERT INTO volunteer(uid) VALUES ($1)", [uid]);
    }

    return result.rows[0];
  }

  static async updateUser(userId, updatedUser) {
    const result = await pool.query(
      "UPDATE Users SET user_name = $2, name = $3, password = $4, email = $5, phone_number = $6, bio = $7, image_id = $8 WHERE uid = $1 RETURNING *",
      [
        userId,
        updatedUser.user_name,
        updatedUser.name,
        updatedUser.password,
        updatedUser.email,
        updatedUser.phone_number,
        updatedUser.bio,
        updatedUser.image_id,
      ]
    );

    return result.rows[0];
  }
  static async updateUserBio(userId, updatedUser) {
    const result = await pool.query("SELECT update_user_bio($1, $2);", [
      userId,
      updatedUser.bio,
    ]);

    return result.rows[0];
  }
  static async deleteUser(userId) {
    const result = await pool.query(
      "DELETE FROM Users WHERE uid = $1 RETURNING *",
      [userId]
    );
    return result.rows[0];
  }
}

module.exports = User;
