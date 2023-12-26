const PatientJoinsGroup = require("../services/patientJoinsGroup");

const patientJoinsGroupController = {
  getAllPatientJoinsGroups: async (req, res) => {
    try {
      const patientJoinsGroups =
        await PatientJoinsGroup.getAllPatientJoinsGroups();
      res.json({ patientJoinsGroups });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getPatientJoinsGroupById: async (req, res) => {
    const userId = req.params.userId;
    const groupId = req.params.groupId;

    try {
      const patientJoinsGroup =
        await PatientJoinsGroup.getPatientJoinsGroupById(userId, groupId);

      if (patientJoinsGroup) {
        res.json(patientJoinsGroup);
      } else {
        res.status(404).json({ error: "Patient-Joined Group not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createPatientJoinsGroup: async (req, res) => {
    const newPatientJoinsGroup = req.body;

    try {
      const createdPatientJoinsGroup =
        await PatientJoinsGroup.createPatientJoinsGroup(newPatientJoinsGroup);
      res.status(201).json(createdPatientJoinsGroup);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updatePatientJoinsGroup: async (req, res) => {
    const userId = req.params.userId;
    const groupId = req.params.groupId;
    const updatedPatientJoinsGroup = req.body;

    try {
      const patientJoinsGroup = await PatientJoinsGroup.updatePatientJoinsGroup(
        userId,
        groupId,
        updatedPatientJoinsGroup
      );

      if (patientJoinsGroup) {
        res.json(patientJoinsGroup);
      } else {
        res.status(404).json({ error: "Patient-Joined Group not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deletePatientJoinsGroup: async (req, res) => {
    const userId = req.params.userId;
    const groupId = req.params.groupId;

    try {
      const deletedPatientJoinsGroup =
        await PatientJoinsGroup.deletePatientJoinsGroup(userId, groupId);

      if (deletedPatientJoinsGroup) {
        res.json({ message: "Patient-Joined Group deleted successfully" });
      } else {
        res.status(404).json({ error: "Patient-Joined Group not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = patientJoinsGroupController;
