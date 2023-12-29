const pool = require("../DB/db");

class Organization {
  static async getAllOrganizations() {
    const result = await pool.query("SELECT * FROM Organization");
    return result.rows;
  }
  static async getunapprovedOrganizations() {
    const result = await pool.query(
      "SELECT * FROM Organization where not approved"
    );
    return result.rows;
  }
  static async getOrganizationById(organizationId) {
    const result = await pool.query(
      "SELECT * FROM Organization WHERE uid = $1",
      [organizationId]
    );
    return result.rows[0];
  }
  static async createOrganization(newOrganization) {
    const result = await pool.query(
      "INSERT INTO Organization(uid, location, A_ID, approved) VALUES($1, $2, $3, $4) RETURNING *",
      [
        newOrganization.uid,
        newOrganization.location,
        newOrganization.A_ID,
        newOrganization.approved,
      ]
    );

    return result.rows[0];
  }

  static async updateOrganization(organizationId, updatedOrganization) {
    const result = await pool.query(
      "UPDATE Organization SET location = $2, A_ID = $3, approved = $4 WHERE uid = $1 RETURNING *",
      [
        organizationId,
        updatedOrganization.location,
        updatedOrganization.A_ID,
        updatedOrganization.approved,
      ]
    );

    return result.rows[0];
  }

  static async deleteOrganization(organizationId) {
    const result = await pool.query(
      "DELETE FROM Organization WHERE uid = $1 RETURNING *",
      [organizationId]
    );
    return result.rows[0];
  }
}

module.exports = Organization;
