const PersonalPosts = require('../models/personalPosts');

const personalPostsController = {
  getAllPersonalPosts: async (req, res) => {
    try {
      const posts = await PersonalPosts.getAllPersonalPosts();
      res.json({ posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getPersonalPostsById: async (req, res) => {
    const ppid = req.params.ppid;
    const pfid = req.params.pfid;

    try {
      const post = await PersonalPosts.getPersonalPostsById(ppid, pfid);

      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ error: 'Personal Post not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createPersonalPosts: async (req, res) => {
    const newPost = req.body;

    try {
      const createdPost = await PersonalPosts.createPersonalPosts(newPost);
      res.status(201).json(createdPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updatePersonalPosts: async (req, res) => {
    const ppid = req.params.ppid;
    const pfid = req.params.pfid;
    const updatedPost = req.body;

    try {
      const post = await PersonalPosts.updatePersonalPosts(ppid, pfid, updatedPost);

      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ error: 'Personal Post not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deletePersonalPosts: async (req, res) => {
    const ppid = req.params.ppid;
    const pfid = req.params.pfid;

    try {
      const deletedPost = await PersonalPosts.deletePersonalPosts(ppid, pfid);

      if (deletedPost) {
        res.json({ message: 'Personal Post deleted successfully' });
      } else {
        res.status(404).json({ error: 'Personal Post not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = personalPostsController;
