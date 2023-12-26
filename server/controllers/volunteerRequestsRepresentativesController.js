const VolunteerRequestsRepresentatives = require("../services/volunteerRequestsRepresentatives");

const volunteerRequestsRepresentativesController = {
  getAllRequests: async (req, res) => {
    try {
      const requests = await VolunteerRequestsRepresentatives.getAllRequests();
      res.json({ requests });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getRequestById: async (req, res) => {
    const uid = req.params.uid;
    const repId = req.params.rep_id;

    try {
      const request = await VolunteerRequestsRepresentatives.getRequestById(
        uid,
        repId
      );

      if (request) {
        res.json(request);
      } else {
        res.status(404).json({ error: "Request not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createRequest: async (req, res) => {
    const newRequest = req.body;

    try {
      const createdRequest =
        await VolunteerRequestsRepresentatives.createRequest(newRequest);
      res.status(201).json(createdRequest);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteRequest: async (req, res) => {
    const uid = req.params.uid;
    const repId = req.params.rep_id;

    try {
      const deletedRequest =
        await VolunteerRequestsRepresentatives.deleteRequest(uid, repId);

      if (deletedRequest) {
        res.json({ message: "Request deleted successfully" });
      } else {
        res.status(404).json({ error: "Request not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = volunteerRequestsRepresentativesController;
