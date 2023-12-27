const pool = require("../DB/db");

class Event {
  static async getAllEvents(event_owner_id) {
    const result = await pool.query(
      "SELECT * FROM events WHERE event_owner_id = $1",
      [event_owner_id]
    );
    return result.rows;
  }

  static async createEvent(newEvent) {
    const result = await pool.query(
      "INSERT INTO events(content, event_owner_id, image_id) VALUES($1, $2, $3) RETURNING *",
      [newEvent.content, newEvent.event_owner_id, newEvent.image_id]
    );

    return result.rows[0];
  }

  static async updateEvent(eid, event_owner_id, updatedEvent) {
    const result = await pool.query(
      "UPDATE events SET content = $1 WHERE eid = $2 AND event_owner_id = $3 RETURNING *",
      [updatedEvent.content, eid, event_owner_id]
    );

    return result.rows[0];
  }

  static async deleteEvent(eid, event_owner_id) {
    const result = await pool.query(
      "DELETE FROM events WHERE eid = $1 AND event_owner_id = $2 RETURNING *",
      [eid, event_owner_id]
    );
    return result.rows[0];
  }
}

module.exports = Event;
