const { body } = require("express-validator");

const personalPostsValidations = [
  body("ppid")
    .isInt()
    .notEmpty()
    .withMessage("ppid must be a non-empty integer"),
  body("uid").isInt().notEmpty().withMessage("uid must be a non-empty integer"),
  body("date").isISO8601().notEmpty().withMessage("Invalid date format"),
  body("text")
    .isString()
    .notEmpty()
    .withMessage("Text must be a non-empty string"),
  body("image_id")
    .optional()
    .isInt()
    .withMessage("Image ID must be an integer"),
];

module.exports = personalPostsValidations;
