const { body } = require("express-validator");

const chatsValidations = [
  body("GID").isInt().notEmpty().withMessage("GID must be a non-empty integer"),
];

module.exports = chatsValidations;
