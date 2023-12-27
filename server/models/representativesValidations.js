const { body } = require("express-validator");

const representativesValidations = [
  body("experiences")
    .optional()
    .isString()
    .withMessage("Experiences must be a string"),

  body("GID").optional().isInt().withMessage("GID must be an integer"),

  body("uid")
    .notEmpty()
    .withMessage("User ID must be a non-empty")
    .isInt()
    .withMessage("User ID must be an integer"),
];

module.exports = representativesValidations;
