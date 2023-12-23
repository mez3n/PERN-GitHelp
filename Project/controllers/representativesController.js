const Representatives = require("../models/representatives");

const representativesController = {
  getAllRepresentatives: async (req, res) => {
    try {
      const representatives = await Representatives.getAllRepresentatives();
      res.json({ representatives });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getRepresentativeById: async (req, res) => {
    const repId = req.params.repId;

    try {
      const representative = await Representatives.getRepresentativeById(repId);

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

  createRepresentative: async (req, res) => {
    const newRepresentative = req.body;

    try {
      const createdRepresentative = await Representatives.createRepresentative(
        newRepresentative
      );
      res.status(201).json(createdRepresentative);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateRepresentative: async (req, res) => {
    const repId = req.params.repId;
    const updatedRepresentative = req.body;

    try {
      const representative = await Representatives.updateRepresentative(
        repId,
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
    const repId = req.params.repId;

    try {
      const deletedRepresentative = await Representatives.deleteRepresentative(
        repId
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
