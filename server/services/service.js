const pool = require("../DB/db");

class Service {
  static async getAllServices(event_owner_id) {
    const result = await pool.query(
      "SELECT * FROM service WHERE event_owner_id = $1",
      [event_owner_id]
    );
    return result.rows;
  }

  static async createService(newService) {
    const result = await pool.query(
      "INSERT INTO service(start_date, end_date, event_owner_id, type, eid) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        newService.start_date,
        newService.end_date,
        newService.event_owner_id,
        newService.type,
        newService.eid,
      ]
    );

    return result.rows[0];
  }

  static async updateService(service_id, eid, event_owner_id, updatedService) {
    const result = await pool.query(
      "UPDATE service SET start_date = $1, end_date = $2, type = $3 WHERE service_id = $4 AND eid = $5 AND event_owner_id = $6 RETURNING *",
      [
        updatedService.start_date,
        updatedService.end_date,
        updatedService.type,
        service_id,
        eid,
        event_owner_id,
      ]
    );

    return result.rows[0];
  }

  static async deleteService(service_id, eid, event_owner_id) {
    const result = await pool.query(
      "DELETE FROM service WHERE service_id = $1 AND eid = $2 AND event_owner_id = $3 RETURNING *",
      [service_id, eid, event_owner_id]
    );
    return result.rows[0];
  }
}

module.exports = Service;
