const express = require("express");
const tasksController = require("../controllers/tasksController");
const tasksValidations = require("../models/tasksValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();

// Get all tasks
router.get("/", tasksController.getAllTasks);

// Get a specific task by ID
router.get("/:taskId", tasksController.getTaskById);

// Create a new task
router.post(
  "/",
  tasksValidations,
  handleValidationErrors,
  tasksController.createTask
);

// Update a task by ID
router.put(
  "/:taskId",
  tasksValidations,
  handleValidationErrors,
  tasksController.updateTask
);

// Delete a task by ID
router.delete("/:taskId", tasksController.deleteTask);

module.exports = router;
