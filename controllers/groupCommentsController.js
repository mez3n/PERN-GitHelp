const GroupComments = require("../services/groupComments");

const groupCommentsController = {
  getAllGroupComments: async (req, res) => {
    try {
      const groupComments = await GroupComments.getAllGroupComments();
      res.json({ groupComments });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getGroupCommentById: async (req, res) => {
    const gcid = req.params.gcid;

    try {
      const groupComment = await GroupComments.getGroupCommentById(gcid);

      if (groupComment) {
        res.json(groupComment);
      } else {
        res.status(404).json({ error: "Group Comment not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createGroupComment: async (req, res) => {
    const newGroupComment = req.body;

    try {
      const createdGroupComment = await GroupComments.createGroupComment(
        newGroupComment
      );
      res.status(201).json(createdGroupComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateGroupComment: async (req, res) => {
    const gcid = req.params.gcid;
    const updatedGroupComment = req.body;

    try {
      const groupComment = await GroupComments.updateGroupComment(
        gcid,
        updatedGroupComment
      );

      if (groupComment) {
        res.json(groupComment);
      } else {
        res.status(404).json({ error: "Group Comment not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteGroupComment: async (req, res) => {
    const gcid = req.params.gcid;

    try {
      const deletedGroupComment = await GroupComments.deleteGroupComment(gcid);

      if (deletedGroupComment) {
        res.json({ message: "Group Comment deleted successfully" });
      } else {
        res.status(404).json({ error: "Group Comment not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = groupCommentsController;
