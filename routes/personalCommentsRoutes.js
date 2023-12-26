const express = require("express");
const personalCommentsController = require("../controllers/personalCommentsController");
const personalCommentsValidations = require("../models/personalCommentsValidations");

const router = express.Router();

// Get all personal comments
router.get("/", personalCommentsController.getAllPersonalComments);

// Get a specific personal comment by ID
router.get("/:pcid", personalCommentsController.getPersonalCommentById);

// Create a new personal comment
router.post(
  "/",
  personalCommentsValidations,
  personalCommentsController.createPersonalComment
);

// Update a personal comment by ID
router.put(
  "/:pcid",
  personalCommentsValidations,
  personalCommentsController.updatePersonalComment
);

// Delete a personal comment by ID
router.delete("/:pcid", personalCommentsController.deletePersonalComment);

module.exports = router;
