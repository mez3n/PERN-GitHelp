// connection.js
const { Pool } = require("pg");
require("dotenv").config(); // Load environment variables from .env file

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
const db = {
  query: async (text, params) => {
    try {
      const result = await pool.query(text, params);
      return result.rows;
    } catch (error) {
      console.error("Query Error:", error.message);
      throw error; // Rethrow the error to propagate it to the caller
    }
  },
};

module.exports = db;
