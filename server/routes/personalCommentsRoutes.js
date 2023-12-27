const express = require("express");
const personalCommentsController = require("../controllers/personalCommentsController");
const personalCommentsValidations = require("../models/personalCommentsValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();

// Get all personal comments
router.get(
  "/:ppid/:post_owner_uid",
  personalCommentsController.getAllPersonalComments
);

// Create a new personal comment
router.post(
  "/",
  personalCommentsValidations,
  handleValidationErrors,
  personalCommentsController.createPersonalComment
);

// Update a personal comment by ID
router.put(
  "/:ppid/:pcid/:post_owner_uid",
  personalCommentsValidations,
  handleValidationErrors,
  personalCommentsController.updatePersonalComment
);

// Delete a personal comment by ID
router.delete(
  "/:ppid/:pcid/:post_owner_uid",
  personalCommentsController.deletePersonalComment
);

module.exports = router;
