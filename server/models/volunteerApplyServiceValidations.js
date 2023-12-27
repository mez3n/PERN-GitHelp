// volunteerApplyServiceValidations.js
const { body } = require("express-validator");

const volunteerApplyServiceValidations = [
  body("amount")
    .isInt()
    .notEmpty()
    .withMessage("Amount must be a non-empty integer"),
  body("blood_type")
    .isString()
    .notEmpty()
    .withMessage("Blood Type must be a non-empty string"),
  body("service_id")
    .isInt()
    .notEmpty()
    .withMessage("Service ID must be a non-empty integer"),
  body("eid")
    .isInt()
    .notEmpty()
    .withMessage("Event ID must be a non-empty integer"),
  body("event_owner_id")
    .isInt()
    .notEmpty()
    .withMessage("Event Owner ID must be a non-empty integer"),
  body("uid")
    .isInt()
    .notEmpty()
    .withMessage("User ID must be a non-empty integer"),
];

module.exports = volunteerApplyServiceValidations;
