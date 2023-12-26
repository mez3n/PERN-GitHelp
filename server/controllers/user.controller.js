const db = require("../db/connection.js");

const userController = {
  findAll: async (req, res) => {
    try {
      console.log(1);
      // Use await with db.query to make it asynchronous
      let users = await db.query("SELECT * FROM users");
      console.log(users);
      if (users.length === 0) {
        return res.status(400).json({ "error": "users not found" });
      }
      return res.status(200).json({ "users": users });
    } catch (error) {
      return res.status(500).json({ "error": "Can't find users, please try again" });
    }
  },

  findOne: async (req, res) => {
    try {
      let id = req.params.id;
      // You need to replace this line with your database query logic
      let user = await db.query("SELECT * FROM users WHERE uid = $1", [id]);

      if (user.length == 0) {
        return res.status(400).json({ "error": "user not found" });
      }
      return res.status(200).json({ "user": user[0] });
    } catch (error) {
      return res.status(500).json({ "error": "Can't find user, please try again" });
    }
  },

  // delete: async (req, res) => {
  //   try {
  //     let id = req.params.id;
  //     // You need to replace this line with your database query logic
  //     let user = await db.query("DELETE FROM users WHERE uid = $1 RETURNING *", [id]);

  //     if (!user || user.length === 0) {
  //       return res.status(400).json({ "error": "user not found" });
  //     }
  //     return res.status(200).json({ "deleted user": user[0] });
  //   } catch (error) {
  //     return res.status(500).json({ "error": "Can't find user, please try again" });
  //   }
  // },
};

module.exports = userController;
