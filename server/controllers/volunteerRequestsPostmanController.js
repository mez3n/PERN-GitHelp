const VolunteerRequestsPostman = require("../services/volunteerRequestsPostman");

const volunteerRequestsPostmanController = {
  createVolunteerRequestsPostman: async (req, res) => {
    const { uid, p_id } = req.body;

    try {
      const createdVolunteerRequestsPostman =
        await VolunteerRequestsPostman.createVolunteerRequestsPostman(
          uid,
          p_id
        );
      res.status(201).json(createdVolunteerRequestsPostman);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = volunteerRequestsPostmanController;
