const PatientHasTask = require("../services/patientHasTask");

const patientHasTaskController = {
  getAllPatientHasTasks: async (req, res) => {
    try {
      const patientHasTasks = await PatientHasTask.getAllPatientHasTasks();
      res.json({ patientHasTasks });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getPatientHasTaskById: async (req, res) => {
    const { uid, GID, task_id, rep_id } = req.params;

    try {
      const patientHasTask = await PatientHasTask.getPatientHasTaskById(
        uid,
        GID,
        task_id,
        rep_id
      );

      if (patientHasTask) {
        res.json(patientHasTask);
      } else {
        res.status(404).json({ error: "Patient has task not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getPatientHasTaskALLById: async (req, res) => {
    const { uid } = req.params;
    try {
      const patientHasTask = await PatientHasTask.getPatientHasTaskAllById(uid);
      if (patientHasTask) {
        res.json(patientHasTask);
      } else {
        res.status(404).json({ error: "no tasks for this patient" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createPatientHasTask: async (req, res) => {
    const newTask = req.body;

    try {
      const createdTask = await PatientHasTask.createPatientHasTask(newTask);
      res.status(201).json(createdTask);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updatePatientHasTask: async (req, res) => {
    const { uid, GID, task_id, rep_id } = req.params;
    const updatedTask = req.body;

    try {
      const patientHasTask = await PatientHasTask.updatePatientHasTask(
        uid,
        GID,
        task_id,
        rep_id,
        updatedTask
      );

      if (patientHasTask) {
        res.json(patientHasTask);
      } else {
        res.status(404).json({ error: "Patient has task not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deletePatientHasTask: async (req, res) => {
    const { uid, GID, task_id, rep_id } = req.params;

    try {
      const deletedTask = await PatientHasTask.deletePatientHasTask(
        uid,
        GID,
        task_id,
        rep_id
      );

      if (deletedTask) {
        res.json({ message: "Patient has task deleted successfully" });
      } else {
        res.status(404).json({ error: "Patient has task not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = patientHasTaskController;
