const Volunteer = require("../services/volunteer");

const volunteerController = {
  getAllVolunteers: async (req, res) => {
    try {
      const volunteers = await Volunteer.getAllVolunteers();
      res.json({ volunteers });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getVolunteerById: async (req, res) => {
    const uid = req.params.uid;
    try {
      const volunteer = await Volunteer.getVolunteerById(uid);

      if (volunteer) {
        res.json(volunteer);
      } else {
        res.status(404).json({ error: "Volunteer not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createVolunteer: async (req, res) => {
    const newVolunteer = req.body;

    try {
      const createdVolunteer = await Volunteer.createVolunteer(newVolunteer);
      res.status(201).json(createdVolunteer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateVolunteer: async (req, res) => {
    const uid = req.params.uid;
    const updatedVolunteer = req.body;

    try {
      const volunteer = await Volunteer.updateVolunteer(uid, updatedVolunteer);

      if (volunteer) {
        res.json(volunteer);
      } else {
        res.status(404).json({ error: "Volunteer not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteVolunteer: async (req, res) => {
    const uid = req.params.uid;

    try {
      const deletedVolunteer = await Volunteer.deleteVolunteer(uid);

      if (deletedVolunteer) {
        res.json({ message: "Volunteer deleted successfully" });
      } else {
        res.status(404).json({ error: "Volunteer not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = volunteerController;
