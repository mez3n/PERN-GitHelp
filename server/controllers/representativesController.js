const Representative = require("../services/representatives");

const representativesController = {
  getRepresentativeByUid: async (req, res) => {
    const uid = req.params.uid;
    try {
      const representative = await Representative.getRepresentativeByUid(uid);
      res.json({ representative });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createRepresentative: async (req, res) => {
    const newRepresentative = req.body;
    try {
      const createdRepresentative = await Representative.createRepresentative(
        newRepresentative
      );
      res.status(201).json(createdRepresentative);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateRepresentative: async (req, res) => {
    const uid = req.params.uid;
    const updatedRepresentative = req.body;

    try {
      const representative = await Representative.updateRepresentative(
        uid,
        updatedRepresentative
      );

      if (representative) {
        res.json(representative);
      } else {
        res.status(404).json({ error: "Representative not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteRepresentative: async (req, res) => {
    const uid = req.params.uid;

    try {
      const deletedRepresentative = await Representative.deleteRepresentative(
        uid
      );

      if (deletedRepresentative) {
        res.json({ message: "Representative deleted successfully" });
      } else {
        res.status(404).json({ error: "Representative not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = representativesController;
