const { body } = require("express-validator");

const eventsValidations = [
  body("content")
    .isString()
    .notEmpty()
    .withMessage("Content must be a non-empty string"),
  body("event_owner_id")
    .isInt()
    .notEmpty()
    .withMessage("event_owner_id must be a non-empty integer"),
  body("image_id")
    .optional()
    .isInt()
    .withMessage("Image ID must be an integer"),
];

module.exports = eventsValidations;
