const pool = require("../DB/db");

class Images {
  static async getAllImages() {
    const result = await pool.query("SELECT * FROM Images");
    return result.rows;
  }

  static async getImageById(imageId) {
    const result = await pool.query(
      "SELECT * FROM Images WHERE image_id = $1",
      [imageId]
    );
    return result.rows[0];
  }

  static async createImage(newImage) {
    const result = await pool.query(
      "INSERT INTO Images(image_data) VALUES($1) RETURNING *",
      [newImage.image_data]
    );

    return result.rows[0];
  }

  static async updateImage(imageId, updatedImage) {
    const result = await pool.query(
      "UPDATE Images SET image_data = $2 WHERE image_id = $1 RETURNING *",
      [imageId, updatedImage.image_data]
    );

    return result.rows[0];
  }

  static async deleteImage(imageId) {
    const result = await pool.query(
      "DELETE FROM Images WHERE image_id = $1 RETURNING *",
      [imageId]
    );
    return result.rows[0];
  }
}

module.exports = Images;
