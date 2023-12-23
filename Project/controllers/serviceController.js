const Service = require("../models/service");

const serviceController = {
  getAllServices: async (req, res) => {
    try {
      const services = await Service.getAllServices();
      res.json({ services });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getServiceById: async (req, res) => {
    const serviceId = req.params.serviceId;
    const ppid = req.params.ppid;
    const pfid = req.params.pfid;

    try {
      const service = await Service.getServiceById(serviceId, ppid, pfid);

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
    const serviceId = req.params.serviceId;
    const ppid = req.params.ppid;
    const pfid = req.params.pfid;
    const updatedService = req.body;

    try {
      const service = await Service.updateService(
        serviceId,
        ppid,
        pfid,
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
    const serviceId = req.params.serviceId;
    const ppid = req.params.ppid;
    const pfid = req.params.pfid;

    try {
      const deletedService = await Service.deleteService(serviceId, ppid, pfid);

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
