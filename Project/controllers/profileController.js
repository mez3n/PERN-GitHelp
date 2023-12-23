const Profile = require('../models/profile');

const profileController = {
  getProfileByUserId: async (req, res) => {
    const userId = req.params.id;

    try {
      const profile = await Profile.getProfileByUserId(userId);

      if (profile) {
        res.json(profile);
      } else {
        res.status(404).json({ error: 'Profile not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProfile: async (req, res) => {
    const userId = req.params.id;

    try {
      const createdProfile = await Profile.createProfile(userId);
      res.status(201).json(createdProfile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateProfile: async (req, res) => {
    const userId = req.params.id;
    const updatedProfile = req.body;

    try {
      const profile = await Profile.updateProfile(userId, updatedProfile);

      if (profile) {
        res.json(profile);
      } else {
        res.status(404).json({ error: 'Profile not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteProfile: async (req, res) => {
    const userId = req.params.id;

    try {
      const deletedProfile = await Profile.deleteProfile(userId);

      if (deletedProfile) {
        res.json({ message: 'Profile deleted successfully' });
      } else {
        res.status(404).json({ error: 'Profile not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = profileController;
