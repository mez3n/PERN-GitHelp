const { body } = require("express-validator");

const repPatientGroupValidations = [
  body("patient_id")
    .isInt()
    .notEmpty()
    .withMessage("Patient ID must be a non-empty integer"),
  body("GID")
    .isInt()
    .notEmpty()
    .withMessage("Group ID must be a non-empty integer"),
  body("rep_id")
    .isInt()
    .notEmpty()
    .withMessage("Representative ID must be a non-empty integer"),
];

module.exports = repPatientGroupValidations;
