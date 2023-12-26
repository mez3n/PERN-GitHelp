const VolunteerApplyService = require("../services/volunteerApplyService");

const volunteerApplyServiceController = {
  getAllApplications: async (req, res) => {
    try {
      const applications = await VolunteerApplyService.getAllApplications();
      res.json({ applications });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getApplicationById: async (req, res) => {
    const serviceId = req.params.serviceId;
    const ppid = req.params.ppid;
    const pfid = req.params.pfid;
    const uid = req.params.uid;

    try {
      const application = await VolunteerApplyService.getApplicationById(
        serviceId,
        ppid,
        pfid,
        uid
      );

      if (application) {
        res.json(application);
      } else {
        res.status(404).json({ error: "Application not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createApplication: async (req, res) => {
    const newApplication = req.body;

    try {
      const createdApplication = await VolunteerApplyService.createApplication(
        newApplication
      );
      res.status(201).json(createdApplication);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateApplication: async (req, res) => {
    const serviceId = req.params.serviceId;
    const ppid = req.params.ppid;
    const pfid = req.params.pfid;
    const uid = req.params.uid;
    const updatedApplication = req.body;

    try {
      const application = await VolunteerApplyService.updateApplication(
        serviceId,
        ppid,
        pfid,
        uid,
        updatedApplication
      );

      if (application) {
        res.json(application);
      } else {
        res.status(404).json({ error: "Application not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteApplication: async (req, res) => {
    const serviceId = req.params.serviceId;
    const ppid = req.params.ppid;
    const pfid = req.params.pfid;
    const uid = req.params.uid;

    try {
      const deletedApplication = await VolunteerApplyService.deleteApplication(
        serviceId,
        ppid,
        pfid,
        uid
      );

      if (deletedApplication) {
        res.json({ message: "Application deleted successfully" });
      } else {
        res.status(404).json({ error: "Application not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = volunteerApplyServiceController;
