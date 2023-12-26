const { body } = require("express-validator");

const volunteerApplyServiceValidations = [
  body("amount")
    .isInt()
    .notEmpty()
    .withMessage("Amount must be a non-empty integer"),
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

module.exports = volunteerApplyServiceValidations;
