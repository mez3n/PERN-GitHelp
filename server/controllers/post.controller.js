const { date } = require("joi");
const db = require("../db/connection.js");
const PostController = {
  createPost: async (req, res) => {
        try {
      const profileid = await db.query("select * from profile where uid = $1", [
        req.body.user.uid,
      ]);
      
      const post = await db.query(
        "insert into personal_posts (photo,Text,pfid) values ($1,$2,$3) returning *",
        [null, req.body.content, profileid[0].pfid]
      );
      res.status(201).json({ message: "post created successfully", post });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "An error occurred while creating your Post. Please try again.",
      });
    }
  },

  FindAll: async (req, res) => {
    try {
      const profileid = await db.query("select * from profile where uid = $1", [
        req.body.user.uid,
      ]);

      let posts = await db.query(
        "select * from personal_posts where pfid = $1",
        [profileid[0].pfid]
      );
      if (posts.length == 0) {
        return res.status(400).json({ message: "posts not found" });
      }
      return res.status(201).json({ posts: posts });
    } catch (error) {
      return res.status(400).json({ message: "error please try again" });
    }
  },

  FindOne: async (req, res) => {
    try {
      const profileid = await db.query("select * from profile where uid = $1", [
        req.body.user.uid,
      ]);
      id = req.params.id;
      let post = await db.query("select * from personal_posts where ppid =$1", [id]);
      if (post.length == 0) {
        return res.status(400).json({ message: "post not found" });
      }
      return res.status(201).json({ post: post });
    } catch (error) {
      return res.status(400).json({ error: "error please try again" });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      let post = await db.query("delete from posts where pid =$1", [id]);
      if (posts.length == 0) {
        return res.status(400).json({ message: "post not found" });
      }
      return res.status(201).json({ "deleted post": post });
    } catch (error) {
      return res.status(400).json({ message: "error please try again" });
    }
  },
};

module.exports = PostController;
