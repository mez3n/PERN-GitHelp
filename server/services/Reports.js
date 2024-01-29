const pool = require("../DB/db");

class Reports {
  static async getAllUsersGroupedByType() {
    const result = await pool.query(
      "SELECT count(*),type FROM users group by type "
    );
    return result.rows;
  }

  static async getAllOrdersOrderedByDate() {
    const result = await pool.query(
      "SELECT * FROM orders group by postman_id "
    );
    return result.rows;
  }

  static async getAllServicesGroupedByType() {
    const result = await pool.query(
      "SELECT type,count(*) FROM service group by type "
    );
    return result.rows;
  }

  static async getCountOfTasksForEachPatient() {
    const result = await pool.query(
      "SELECT count(*) FROM patient_has_task group by uid "
    );
    return result.rows;
  }

  static async getCountOfPostmenOfEachOrganization() {
    const result = await pool.query(
      "SELECT oid,count(*) FROM postman group by oid "
    );
    return result.rows;
  }

  static async getCountOfEventsOfeachOrganization() {
    const result = await pool.query(
      "SELECT event_owner_id,count(*) FROM events group by event_owner_id "
    );
    return result.rows;
  }
}

module.exports = Reports;
