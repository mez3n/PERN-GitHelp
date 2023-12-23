const express = require("express");
const imagesController = require("../controllers/imagesController");

const router = express.Router();

// Get all images
router.get("/", imagesController.getAllImages);

// Get an image by ID
router.get("/:imageId", imagesController.getImageById);

// Create a new image
router.post("/", imagesController.createImage);

// Update an image by ID
router.put("/:imageId", imagesController.updateImage);

// Delete an image by ID
router.delete("/:imageId", imagesController.deleteImage);

module.exports = router;
