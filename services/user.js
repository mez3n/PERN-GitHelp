const pool = require("../DB/db.js");

class User {
  static async getAllUsers() {
    const result = await pool.query("SELECT * FROM Users");
    return result.rows;
  }

  static async getUserById(userId) {
    const result = await pool.query("SELECT * FROM Users WHERE uid = $1", [
      userId,
    ]);
    return result.rows[0];
  }

  static async createUser(newUser) {
    const result = await pool.query(
      "INSERT INTO Users(user_name, name, password, email, phone_number, bio, image_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        newUser.user_name,
        newUser.name,
        newUser.password,
        newUser.email,
        newUser.phone_number,
        newUser.bio,
        newUser.image_id,
      ]
    );

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

  static async deleteUser(userId) {
    const result = await pool.query(
      "DELETE FROM Users WHERE uid = $1 RETURNING *",
      [userId]
    );
    return result.rows[0];
  }
}

module.exports = User;
