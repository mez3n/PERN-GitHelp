const RepPatientGroup = require("../services/repPatientGroup");
const repPatientGroupController = {
  createRepPatientGroup: async (req, res) => {
    const { patient_id, GID, rep_id } = req.body;

    try {
      const createdRepPatientGroup =
        await RepPatientGroup.createRepPatientGroup(patient_id, GID, rep_id);
      res.status(201).json(createdRepPatientGroup);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = repPatientGroupController;
