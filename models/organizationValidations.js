const { body } = require("express-validator");

const organizationValidations = [
  body("uid").isInt().notEmpty().withMessage("uid must be a non-empty integer"),
  body("location").notEmpty().withMessage("Location must not be empty"),
  body("A_ID")
    .isInt()
    .notEmpty()
    .withMessage("A_ID must be a non-empty integer"),
];

module.exports = organizationValidations;
