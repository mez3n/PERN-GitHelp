const VolunteerApplyService = require("../services/volunteerApplyService");

const volunteerApplyServiceController = {
  createVolunteerApplyService: async (req, res) => {
    const { amount, blood_type, service_id, eid, event_owner_id, uid } =
      req.body;

    try {
      // Additional validation if needed

      const createdVolunteerApplyService =
        await VolunteerApplyService.createVolunteerApplyService(
          amount,
          blood_type,
          service_id,
          eid,
          event_owner_id,
          uid
        );
      res.status(201).json(createdVolunteerApplyService);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = volunteerApplyServiceController;
