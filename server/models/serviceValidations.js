const { body } = require("express-validator");

const serviceValidations = [
  body("start_date")
    .isISO8601()
    .notEmpty()
    .withMessage("Start date must be a non-empty ISO8601 date"),
  body("end_date")
    .isISO8601()
    .notEmpty()
    .withMessage("End date must be a non-empty ISO8601 date"),
  body("type")
    .isInt()
    .notEmpty()
    .withMessage("Type must be a non-empty integer"),
  body("eid").isInt().notEmpty().withMessage("eid must be a non-empty integer"),
  body("event_owner_id")
    .isInt()
    .notEmpty()
    .withMessage("event_owner_id must be a non-empty integer"),
];

module.exports = serviceValidations;
