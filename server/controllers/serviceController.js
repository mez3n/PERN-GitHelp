const Service = require("../services/service");

const serviceController = {
  getAllServices: async (req, res) => {
    const event_owner_id = req.params.event_owner_id;

    try {
      const services = await Service.getAllServices(event_owner_id);
      res.json({ services });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createService: async (req, res) => {
    const newService = req.body;

    try {
      const createdService = await Service.createService(newService);
      res.status(201).json(createdService);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateService: async (req, res) => {
    const service_id = req.params.service_id;
    const eid = req.params.eid;
    const event_owner_id = req.params.event_owner_id;
    const updatedService = req.body;

    try {
      const service = await Service.updateService(
        service_id,
        eid,
        event_owner_id,
        updatedService
      );

      if (service) {
        res.json(service);
      } else {
        res.status(404).json({ error: "Service not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteService: async (req, res) => {
    const service_id = req.params.service_id;
    const eid = req.params.eid;
    const event_owner_id = req.params.event_owner_id;

    try {
      const deletedService = await Service.deleteService(
        service_id,
        eid,
        event_owner_id
      );

      if (deletedService) {
        res.json({ message: "Service deleted successfully" });
      } else {
        res.status(404).json({ error: "Service not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = serviceController;
