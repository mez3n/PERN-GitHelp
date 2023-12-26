const { body } = require("express-validator");

const patientValidations = [
  body("uid").isInt().notEmpty().withMessage("UID must be a non-empty integer"),
];

module.exports = patientValidations;
