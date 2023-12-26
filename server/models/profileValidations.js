const { body } = require("express-validator");

const profileValidations = [
  body("uid").isInt().notEmpty().withMessage("uid must be a non-empty integer"),
];

module.exports = profileValidations;
