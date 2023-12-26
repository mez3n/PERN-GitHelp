const { body } = require("express-validator");

const groupValidations = [
  body("description")
    .isString()
    .notEmpty()
    .withMessage("Description must be a non-empty string"),
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Name must be a non-empty string"),
];

module.exports = groupValidations;
