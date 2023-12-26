const { body } = require("express-validator");

const serviceValidations = [
  body("start_date")
    .isISO8601()
    .notEmpty()
    .withMessage("Invalid start date format"),
  body("end_date")
    .isISO8601()
    .notEmpty()
    .withMessage("Invalid end date format"),
  body("type")
    .isInt()
    .notEmpty()
    .withMessage("Type must be a non-empty integer"),
  body("service_id")
    .isInt()
    .notEmpty()
    .withMessage("service_id must be a non-empty integer"),
  body("ppid")
    .isInt()
    .notEmpty()
    .withMessage("ppid must be a non-empty integer"),
  body("pfid")
    .isInt()
    .notEmpty()
    .withMessage("pfid must be a non-empty integer"),
  body("uid").isInt().notEmpty().withMessage("uid must be a non-empty integer"),
];

module.exports = serviceValidations;
