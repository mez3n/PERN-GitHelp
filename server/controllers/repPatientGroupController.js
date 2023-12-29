const RepPatientGroup = require("../services/repPatientGroup");

const repPatientGroupController = {
  getAllRepPatientGroups: async (req, res) => {
    try {
      const repPatientGroups = await RepPatientGroup.getAllRepPatientGroups();
      res.json({ repPatientGroups });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getRepPatientGroupById: async (req, res) => {
    const { patient_id, GID, rep_id } = req.params;

    try {
      const repPatientGroup = await RepPatientGroup.getRepPatientGroupById(
        patient_id,
        GID,
        rep_id
      );

      if (repPatientGroup) {
        res.json(repPatientGroup);
      } else {
        res.status(404).json({ error: "Rep patient group not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getRepPatientGroupAllPatientsById: async (req, res) => {
    const { rep_id } = req.params;

    try {
      const repPatientGroup =
        await RepPatientGroup.getRepPatientGroupAllPatientsById(rep_id);

      if (repPatientGroup) {
        res.json(repPatientGroup);
      } else {
        res.status(404).json({ error: "Rep patient group not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createRepPatientGroup: async (req, res) => {
    const newGroup = req.body;

    try {
      const createdGroup = await RepPatientGroup.createRepPatientGroup(
        newGroup
      );
      res.status(201).json(createdGroup);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteRepPatientGroup: async (req, res) => {
    const { patient_id, GID, rep_id } = req.params;

    try {
      const deletedGroup = await RepPatientGroup.deleteRepPatientGroup(
        patient_id,
        GID,
        rep_id
      );

      if (deletedGroup) {
        res.json({ message: "Rep patient group deleted successfully" });
      } else {
        res.status(404).json({ error: "Rep patient group not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = repPatientGroupController;
