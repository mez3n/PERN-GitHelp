const { body } = require("express-validator");

const patientHasTaskValidations = [
  body("uid")
    .isInt()
    .notEmpty()
    .withMessage("User ID must be a non-empty integer"),
  body("GID")
    .isInt()
    .notEmpty()
    .withMessage("Group ID must be a non-empty integer"),
  body("state")
    .isBoolean()
    .notEmpty()
    .withMessage("State must be a non-empty boolean"),
  body("task_id")
    .isInt()
    .notEmpty()
    .withMessage("Task ID must be a non-empty integer"),
  body("rep_id")
    .isInt()
    .notEmpty()
    .withMessage("Representative ID must be a non-empty integer"),
];

module.exports = patientHasTaskValidations;
