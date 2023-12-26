const { body } = require("express-validator");

const groupCommentsValidations = [
  body("date")
    .isISO8601()
    .withMessage("Invalid date format. Should be in ISO 8601 format"),
  body("text")
    .isString()
    .notEmpty()
    .withMessage("Text must be a non-empty string"),
  body("gpid")
    .isInt()
    .notEmpty()
    .withMessage("gpid must be a non-empty integer"),
  body("GID").isInt().notEmpty().withMessage("GID must be a non-empty integer"),
  body("uid").isInt().notEmpty().withMessage("uid must be a non-empty integer"),
];

module.exports = groupCommentsValidations;
