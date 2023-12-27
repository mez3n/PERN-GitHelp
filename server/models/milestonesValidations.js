const { body } = require("express-validator");

const milestonesValidations = [
  body("msid")
    .isInt()
    .notEmpty()
    .withMessage("msid must be a non-empty integer"),
  body("streak")
    .isInt()
    .notEmpty()
    .withMessage("streak must be a non-empty integer"),
  body("uid").isInt().notEmpty().withMessage("uid must be a non-empty integer"),
  body("GID").isInt().notEmpty().withMessage("GID must be a non-empty integer"),
];

module.exports = milestonesValidations;
