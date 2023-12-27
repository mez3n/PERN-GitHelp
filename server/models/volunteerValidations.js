const { body } = require("express-validator");

const volunteerValidations = [
  body("uid").isInt().notEmpty().withMessage("uid must be a non-empty integer"),
];

module.exports = volunteerValidations;
