const { body } = require("express-validator");

const groupUserValidations = [
  body("uid")
    .isInt()
    .notEmpty()
    .withMessage("User ID must be a non-empty integer"),
];

module.exports = groupUserValidations;
