const { body } = require("express-validator");

const patientJoinsGroupValidations = [
  body("uid")
    .isInt()
    .notEmpty()
    .withMessage("User ID must be a non-empty integer"),
  body("GID")
    .isInt()
    .notEmpty()
    .withMessage("Group ID must be a non-empty integer"),
];

module.exports = patientJoinsGroupValidations;
