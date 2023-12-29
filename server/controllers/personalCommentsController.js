const PersonalComment = require("../services/personalComments");

const personalCommentsController = {
  getAllPersonalComments: async (req, res) => {
    const ppid = req.params.ppid;
    const post_owner_uid = req.params.post_owner_uid;

    try {
      const personalComments = await PersonalComment.getAllPersonalComments(
        ppid,
        post_owner_uid
      );
      res.json({ personalComments });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createPersonalComment: async (req, res) => {
    const newPersonalComment = req.body;

    try {
      const createdPersonalComment =
        await PersonalComment.createPersonalComment(newPersonalComment);
      res.status(201).json(createdPersonalComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updatePersonalComment: async (req, res) => {
    const ppid = req.params.ppid;
    const pcid = req.params.pcid;
    const post_owner_uid = req.params.post_owner_uid;
    const updatedPersonalComment = req.body;

    try {
      const personalComment = await PersonalComment.updatePersonalComment(
        ppid,
        pcid,
        post_owner_uid,
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
  currentCommentCount: async (req, res) => {
    const ppid = req.params.ppid;
    const post_owner_uid = req.params.post_owner_uid;
    try {
      const count = await PersonalComment.currentCommentCount(ppid,post_owner_uid);
      res.json({ currentCommentCount: count });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deletePersonalComment: async (req, res) => {
    const ppid = req.params.ppid;
    const pcid = req.params.pcid;
    const post_owner_uid = req.params.post_owner_uid;

    try {
      const deletedPersonalComment =
        await PersonalComment.deletePersonalComment(ppid, pcid, post_owner_uid);

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
