const { body, param } = require("express-validator");

const messagesValidations = [
  param("chid")
    .isInt()
    .notEmpty()
    .withMessage("chid must be a non-empty integer"),
  body("date").isISO8601().notEmpty().withMessage("Invalid date format"),
  body("text")
    .isString()
    .notEmpty()
    .withMessage("Text must be a non-empty string"),
  body("gid").isInt().notEmpty().withMessage("gid must be a non-empty integer"),
  body("uid").isInt().notEmpty().withMessage("uid must be a non-empty integer"),
  body("image_id")
    .optional()
    .isInt()
    .withMessage("image_id must be an integer"), // Optional validation
];

module.exports = messagesValidations;
