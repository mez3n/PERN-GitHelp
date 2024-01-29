const { body } = require("express-validator");

const LoginValidations = [
  body("user_name")
    .isString()
    .notEmpty()
    .withMessage("Username must be a non-empty string"),
  body("password")
    .isString()
    .notEmpty()
    .withMessage("Password must be a non-empty string"),
];

module.exports = LoginValidations;
