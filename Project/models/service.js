const pool = require("../DB/db");

class Service {
  static async getAllServices() {
    const result = await pool.query("SELECT * FROM service");
    return result.rows;
  }

  static async getServiceById(serviceId, ppid, pfid) {
    const result = await pool.query(
      "SELECT * FROM service WHERE service_id = $1 AND ppid = $2 AND pfid = $3",
      [serviceId, ppid, pfid]
    );
    return result.rows[0];
  }

  static async createService(newService) {
    const result = await pool.query(
      "INSERT INTO service(start_date, end_date, type, ppid, pfid, uid) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        newService.start_date,
        newService.end_date,
        newService.type,
        newService.ppid,
        newService.pfid,
        newService.uid,
      ]
    );

    return result.rows[0];
  }

  static async updateService(serviceId, ppid, pfid, updatedService) {
    const result = await pool.query(
      "UPDATE service SET start_date = $2, end_date = $3, type = $4, ppid = $5, pfid = $6, uid = $7 WHERE service_id = $1 RETURNING *",
      [
        serviceId,
        updatedService.start_date,
        updatedService.end_date,
        updatedService.type,
        updatedService.ppid,
        updatedService.pfid,
        updatedService.uid,
      ]
    );

    return result.rows[0];
  }

  static async deleteService(serviceId, ppid, pfid) {
    const result = await pool.query(
      "DELETE FROM service WHERE service_id = $1 AND ppid = $2 AND pfid = $3 RETURNING *",
      [serviceId, ppid, pfid]
    );
    return result.rows[0];
  }
}

module.exports = Service;
