const { body } = require("express-validator");

const volunteerJoinsGroupsValidations = [
  body("uid").isInt().notEmpty().withMessage("uid must be a non-empty integer"),
  body("GID").isInt().notEmpty().withMessage("GID must be a non-empty integer"),
];

module.exports = volunteerJoinsGroupsValidations;
