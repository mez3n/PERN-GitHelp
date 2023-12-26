const VolunteerJoinsGroups = require("../services/volunteerJoinsGroups");

const volunteerJoinsGroupsController = {
  getAllJoins: async (req, res) => {
    try {
      const joins = await VolunteerJoinsGroups.getAllJoins();
      res.json({ joins });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getJoinById: async (req, res) => {
    const uid = req.params.uid;
    const gid = req.params.gid;

    try {
      const join = await VolunteerJoinsGroups.getJoinById(uid, gid);

      if (join) {
        res.json(join);
      } else {
        res.status(404).json({ error: "Join not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createJoin: async (req, res) => {
    const newJoin = req.body;

    try {
      const createdJoin = await VolunteerJoinsGroups.createJoin(newJoin);
      res.status(201).json(createdJoin);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateJoin: async (req, res) => {
    const uid = req.params.uid;
    const gid = req.params.gid;
    const updatedJoin = req.body;

    try {
      const join = await VolunteerJoinsGroups.updateJoin(uid, gid, updatedJoin);

      if (join) {
        res.json(join);
      } else {
        res.status(404).json({ error: "Join not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteJoin: async (req, res) => {
    const uid = req.params.uid;
    const gid = req.params.gid;

    try {
      const deletedJoin = await VolunteerJoinsGroups.deleteJoin(uid, gid);

      if (deletedJoin) {
        res.json({ message: "Join deleted successfully" });
      } else {
        res.status(404).json({ error: "Join not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = volunteerJoinsGroupsController;
