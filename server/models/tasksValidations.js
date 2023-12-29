const { body } = require("express-validator");

const tasksValidations = [
  body("content")
    .isString()
    .notEmpty()
    .withMessage("Content must be a non-empty string"),
];

module.exports = tasksValidations;
