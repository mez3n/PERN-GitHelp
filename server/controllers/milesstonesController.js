const Milestones = require("../services/milesstones");

const milestonesController = {
  getAllMilestones: async (req, res) => {
    try {
      const milestones = await Milestones.getAllMilestones();
      res.json({ milestones });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getMilestoneById: async (req, res) => {
    const msid = req.params.msid;

    try {
      const milestone = await Milestones.getMilestoneById(msid);

      if (milestone) {
        res.json(milestone);
      } else {
        res.status(404).json({ error: "Milestone not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createMilestone: async (req, res) => {
    const newMilestone = req.body;

    try {
      const createdMilestone = await Milestones.createMilestone(newMilestone);
      res.status(201).json(createdMilestone);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateMilestone: async (req, res) => {
    const msid = req.params.msid;
    const updatedMilestone = req.body;

    try {
      const milestone = await Milestones.updateMilestone(
        msid,
        updatedMilestone
      );

      if (milestone) {
        res.json(milestone);
      } else {
        res.status(404).json({ error: "Milestone not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteMilestone: async (req, res) => {
    const msid = req.params.msid;

    try {
      const deletedMilestone = await Milestones.deleteMilestone(msid);

      if (deletedMilestone) {
        res.json({ message: "Milestone deleted successfully" });
      } else {
        res.status(404).json({ error: "Milestone not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = milestonesController;
