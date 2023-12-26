const { body } = require("express-validator");

const volunteerRequestsRepresentativesValidations = [
  body("uid").isInt().notEmpty().withMessage("uid must be a non-empty integer"),
  body("rep_id")
    .isInt()
    .notEmpty()
    .withMessage("rep_id must be a non-empty integer"),
];

module.exports = volunteerRequestsRepresentativesValidations;
