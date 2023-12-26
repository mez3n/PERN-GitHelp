const Patient = require("../services/patient");

const patientController = {
  getAllPatients: async (req, res) => {
    try {
      const patients = await Patient.getAllPatients();
      res.json({ patients });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getPatientById: async (req, res) => {
    const userId = req.params.userId;

    try {
      const patient = await Patient.getPatientById(userId);

      if (patient) {
        res.json(patient);
      } else {
        res.status(404).json({ error: "Patient not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createPatient: async (req, res) => {
    const newPatient = req.body;

    try {
      const createdPatient = await Patient.createPatient(newPatient);
      res.status(201).json(createdPatient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updatePatient: async (req, res) => {
    const userId = req.params.userId;
    const updatedPatient = req.body;

    try {
      const patient = await Patient.updatePatient(userId, updatedPatient);

      if (patient) {
        res.json(patient);
      } else {
        res.status(404).json({ error: "Patient not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deletePatient: async (req, res) => {
    const userId = req.params.userId;

    try {
      const deletedPatient = await Patient.deletePatient(userId);

      if (deletedPatient) {
        res.json({ message: "Patient deleted successfully" });
      } else {
        res.status(404).json({ error: "Patient not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = patientController;
