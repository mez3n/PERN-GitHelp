const { body } = require("express-validator");

const representativesValidations = [
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Name must be a non-empty string"),
  body("phone_number")
    .isInt()
    .notEmpty()
    .withMessage("Phone number must be a non-empty integer"),
  body("uid").isInt().notEmpty().withMessage("uid must be a non-empty integer"),
];

module.exports = representativesValidations;
