const { body } = require("express-validator");

const adminManagesGroupsValidations = [
  body("A_ID")
    .isInt()
    .notEmpty()
    .withMessage("A_ID must be a non-empty integer"),
  body("GID").isInt().notEmpty().withMessage("GID must be a non-empty integer"),
];

module.exports = adminManagesGroupsValidations;
