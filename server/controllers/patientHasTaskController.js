const PatientHasTask = require("../services/patientHasTask");

const patientHasTaskController = {
  createPatientHasTask: async (req, res) => {
    const { uid, GID, state, task_id, rep_id } = req.body;

    try {
      const createdPatientHasTask = await PatientHasTask.createPatientHasTask(
        uid,
        GID,
        state,
        task_id,
        rep_id
      );
      res.status(201).json(createdPatientHasTask);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = patientHasTaskController;
