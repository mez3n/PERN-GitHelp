const { body } = require("express-validator");

const personalPostsValidations = [
  body("ppid")
    .isInt()
    .notEmpty()
    .withMessage("ppid must be a non-empty integer"),
  body("date")
    .isISO8601()
    .notEmpty()
    .withMessage("Date must be a non-empty ISO8601 timestamp"),
  body("text").notEmpty().withMessage("Text must not be empty"),
  body("pfid")
    .isInt()
    .notEmpty()
    .withMessage("pfid must be a non-empty integer"),
  body("image_id")
    .optional()
    .isInt()
    .withMessage("image_id must be an integer"),
];

module.exports = personalPostsValidations;
