const express = require("express");
const volunteerJoinsGroupsController = require("../controllers/volunteerJoinsGroupsController");
const volunteerJoinsGroupsValidations = require("../models/volunteerJoinsGroupsValidations");

const router = express.Router();

// Get all joins
router.get("/", volunteerJoinsGroupsController.getAllJoins);

// Get a specific join by ID
router.get("/:uid/:gid", volunteerJoinsGroupsController.getJoinById);

// Create a new join
router.post(
  "/",
  volunteerJoinsGroupsValidations,
  volunteerJoinsGroupsController.createJoin
);

// Update a join by ID
router.put(
  "/:uid/:gid",
  volunteerJoinsGroupsValidations,
  volunteerJoinsGroupsController.updateJoin
);

// Delete a join by ID
router.delete("/:uid/:gid", volunteerJoinsGroupsController.deleteJoin);

module.exports = router;
