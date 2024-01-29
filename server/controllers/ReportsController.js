const Reports = require("../services/Reports");

const reportsController = {
    getAllUsersGroupedByType: async (req, res) => {
    try {
      const users = await Reports.getAllUsersGroupedByType();
      res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getAllOrdersorderdByDate: async (req, res) => {
    try {
      const users = await Reports.getAllOrdersOrderedByDate();
      res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getAllServicesGroupedByType: async (req, res) => {
    try {
      const users = await Reports.getAllServicesGroupedByType();
      res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },



  getCountOfTasksForEachPatient: async (req, res) => {
    try {
      const users = await Reports.getCountOfTasksForEachPatient();
      res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },



  getCountOfPostmenOfEachOrganization: async (req, res) => {
    try {
      const users = await Reports.getCountOfPostmenOfEachOrganization();
      res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },



  getCountOfEventsOfeachOrganization: async (req, res) => {
    try {
      const users = await Reports.getCountOfEventsOfeachOrganization();
      res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },


 

};

module.exports = reportsController;
