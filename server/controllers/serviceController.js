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
  updateServiceEndDate: async (req, res) => {
    const service_id = req.params.service_id;
    const eid = req.params.eid;
    const event_owner_id = req.params.event_owner_id;
    const { end_date } = req.body;
    try {
      const iservice_id = parseInt(req.params.service_id);
      const ieid = parseInt(req.params.eid);
      const ievent_owner_id = parseInt(req.params.event_owner_id);

      if (isNaN(iservice_id) || isNaN(ieid) || isNaN(ievent_owner_id)) {
        // Handle the case where the conversion failed
        return res.status(400).json({
          error: "Invalid service ID, eid, or event_owner_id format",
        });
      }

      const service = await Service.updateServiceEndDate(
        service_id,
        eid,
        event_owner_id,
        end_date
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
