const Task = require("../services/task");

const tasksController = {
  getAllTasks: async (req, res) => {
    try {
      const tasks = await Task.getAllTasks();
      res.json({ tasks });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getTaskById: async (req, res) => {
    const taskId = req.params.taskId;

    try {
      const task = await Task.getTaskById(taskId);

      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ error: "Task not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createTask: async (req, res) => {
    const newTask = req.body;

    try {
      const createdTask = await Task.createTask(newTask);
      res.status(201).json(createdTask);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateTask: async (req, res) => {
    const taskId = req.params.taskId;
    const updatedTask = req.body;

    try {
      const task = await Task.updateTask(taskId, updatedTask);

      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ error: "Task not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteTask: async (req, res) => {
    const taskId = req.params.taskId;

    try {
      const deletedTask = await Task.deleteTask(taskId);

      if (deletedTask) {
        res.json({ message: "Task deleted successfully" });
      } else {
        res.status(404).json({ error: "Task not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = tasksController;
