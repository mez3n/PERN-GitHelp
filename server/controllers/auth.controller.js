const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../DB/db.js");
const authController = {
  signup: async (req, res) => {
    // Validate the request body against the sign up schema

    try {
    
      const { type, user_name, password } = req.body;
      console.log(req.body);
      // Check if the user exists
      const user = await pool.query(
        "select * from users where user_name = $1",
        [user_name]
      );
   
      if (user.rowCount > 0) {
        return res.status(400).json({ error: "user name taken" });
      }

      // Hash the password before saving it to the database
    
      const hashedPassword = await bcrypt.hash(password, 10);
      if (type == "organization" && !req.body.location) {
        return res.status(500).json({
          error: "Please add the organization location in the request",
        });
      }
      if (type == "postman" && !req.body.oid) {
        return res.status(500).json({
          error: "Please add the organization id in the request",
        });
      }
      const new_user = await pool.query(
        "insert into users (name,user_name,email,password,phone_number,bio,type) values($1,$2,$3,$4,$5,$6,$7) returning *",
        [
          req.body.name,
          req.body.user_name,
          req.body.email,
          hashedPassword,
          req.body.phone_number,
          req.body.bio,
          req.body.type,
        ]
      );

      if (type == "patient") {
        await pool.query(
          "insert into group_user (uid) values($1) returning *",
          [new_user.rows[0].uid]
        );
        await pool.query("insert into patient (uid) values($1) returning *", [
          new_user.rows[0].uid,
        ]);
      } else if (type == "representative") {
        await pool.query(
          "insert into group_user (uid) values($1) returning *",
          [new_user.rows[0].uid]
        );
        await pool.query(
          "insert into representative (uid) values($1) returning *",
          [new_user.rows[0].uid]
        );
      } else if (type == "volunteer") {
        await pool.query("insert into volunteer (uid) values($1) returning *", [
          new_user.rows[0].uid,
        ]);
      } else if (type == "postman") {
        await pool.query("insert into postman (p_id,oid) values($1,$2) returning *", [
          new_user.rows[0].uid,
          req.body.oid
        ]);
      } else if (type == "organization") {
        console.log(1);
        await pool.query(
          "insert into Organization (uid,location) values($1,$2) returning *",
          [new_user.rows[0].uid, req.body.location]
        );
      } else if (type == "admin") {
        await pool.query("insert into admin (uid) values($1) returning *", [
          new_user.rows[0].uid,
        ]);
      }else{
        return res
        .status(400)
        .json({ message: "please enter a valid user type" });
      }
      res
        .status(201)
        .json({ message: "User created successfully", user: new_user.rows });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error:
          "An error occurred while creating your account. Please try again.",
      });
    }
  },

  login: async (req, res) => {
    const error = !req.body.user_name || !req.body.password;
    if (error) {
      return res.status(402).json({ error: "Invalid Request" });
    }
    try {
      const { user_name, password } = req.body;
      // Check if the user exists
      const user = await pool.query(
        "select * from users where user_name = $1",
        [user_name]
      );
      if (user.rowCount == 0) {
        return res.status(400).json({ error: "Invalid user name" });
      }
      // Check if the password is correct
      const isValidPassword = await bcrypt.compare(
        password,
        user.rows[0].password
      );
      if (!isValidPassword) {
        return res.status(400).json({ error: "Invalid password" });
      }

      // Generate a JWT token containing the user's id

      const token = jwt.sign({ id: user.rows[0].uid }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      res
        .status(200)
        .json({ message: "Logged in successfully", token, user: user.rows[0] });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "An error occurred while logging you in.Please try again.",
      });
    }
  },
  me: (req, res) => {
    try {
      res.status(200).json({ user: req.body.user });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching your data." });
    }
  },
};

module.exports = authController;
