const PersonalComments = require("../services/personalComments");

const personalCommentsController = {
  getAllPersonalComments: async (req, res) => {
    try {
      const personalComments = await PersonalComments.getAllPersonalComments();
      res.json({ personalComments });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getPersonalCommentById: async (req, res) => {
    const pcid = req.params.pcid;

    try {
      const personalComment = await PersonalComments.getPersonalCommentById(
        pcid
      );

      if (personalComment) {
        res.json(personalComment);
      } else {
        res.status(404).json({ error: "Personal Comment not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createPersonalComment: async (req, res) => {
    const newPersonalComment = req.body;

    try {
      const createdPersonalComment =
        await PersonalComments.createPersonalComment(newPersonalComment);
      res.status(201).json(createdPersonalComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updatePersonalComment: async (req, res) => {
    const pcid = req.params.pcid;
    const updatedPersonalComment = req.body;

    try {
      const personalComment = await PersonalComments.updatePersonalComment(
        pcid,
        updatedPersonalComment
      );

      if (personalComment) {
        res.json(personalComment);
      } else {
        res.status(404).json({ error: "Personal Comment not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deletePersonalComment: async (req, res) => {
    const pcid = req.params.pcid;

    try {
      const deletedPersonalComment =
        await PersonalComments.deletePersonalComment(pcid);

      if (deletedPersonalComment) {
        res.json({ message: "Personal Comment deleted successfully" });
      } else {
        res.status(404).json({ error: "Personal Comment not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = personalCommentsController;
