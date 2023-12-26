const { body } = require("express-validator");

const imagesValidations = [
  body("image_data").notEmpty().withMessage("Image data must not be empty"),
];

module.exports = imagesValidations;
