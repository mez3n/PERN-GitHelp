const pool = require("../DB/db");

class Task {
  static async getAllTasks() {
    const result = await pool.query("SELECT * FROM tasks");
    return result.rows;
  }

  static async getTaskById(taskId) {
    const result = await pool.query("SELECT * FROM tasks WHERE task_id = $1", [
      taskId,
    ]);
    return result.rows[0];
  }

  static async createTask(newTask) {
    const result = await pool.query(
      "INSERT INTO tasks(content) VALUES($1) RETURNING *",
      [newTask.content]
    );

    return result.rows[0];
  }

  static async updateTask(taskId, updatedTask) {
    const result = await pool.query(
      "UPDATE tasks SET content = $1 WHERE task_id = $2 RETURNING *",
      [updatedTask.content, taskId]
    );

    return result.rows[0];
  }

  static async deleteTask(taskId) {
    const result = await pool.query(
      "DELETE FROM tasks WHERE task_id = $1 RETURNING *",
      [taskId]
    );
    return result.rows[0];
  }
}

module.exports = Task;
