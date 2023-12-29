const Event = require("../services/events");

const eventsController = {
  getAllEvents: async (req, res) => {
    const event_owner_id = req.params.event_owner_id;

    try {
      const events = await Event.getAllEvents(event_owner_id);
      res.json({ events });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createEvent: async (req, res) => {
    const newEvent = req.body;

    try {
      const createdEvent = await Event.createEvent(newEvent);
      res.status(201).json(createdEvent);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateEvent: async (req, res) => {
    const eid = req.params.eid;
    const event_owner_id = req.params.event_owner_id;
    const updatedEvent = req.body;

    try {
      const event = await Event.updateEvent(eid, event_owner_id, updatedEvent);

      if (event) {
        res.json(event);
      } else {
        res.status(404).json({ error: "Event not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteEvent: async (req, res) => {
    const eid = req.params.eid;
    const event_owner_id = req.params.event_owner_id;

    try {
      const deletedEvent = await Event.deleteEvent(eid, event_owner_id);

      if (deletedEvent) {
        res.json({ message: "Event deleted successfully" });
      } else {
        res.status(404).json({ error: "Event not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = eventsController;
