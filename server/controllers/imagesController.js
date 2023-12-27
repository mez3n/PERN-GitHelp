const Images = require("../services/images");

const imagesController = {
  getAllImages: async (req, res) => {
    try {
      const images = await Images.getAllImages();
      res.json({ images });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getImageById: async (req, res) => {
    const imageId = req.params.imageId;

    try {
      const image = await Images.getImageById(imageId);

      if (image) {
        res.json(image);
      } else {
        res.status(404).json({ error: "Image not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createImage: async (req, res) => {
    const newImage = req.body;

    try {
      const createdImage = await Images.createImage(newImage);
      res.status(201).json(createdImage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateImage: async (req, res) => {
    const imageId = req.params.imageId;
    const updatedImage = req.body;

    try {
      const image = await Images.updateImage(imageId, updatedImage);

      if (image) {
        res.json(image);
      } else {
        res.status(404).json({ error: "Image not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteImage: async (req, res) => {
    const imageId = req.params.imageId;

    try {
      const deletedImage = await Images.deleteImage(imageId);

      if (deletedImage) {
        res.json({ message: "Image deleted successfully" });
      } else {
        res.status(404).json({ error: "Image not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = imagesController;
