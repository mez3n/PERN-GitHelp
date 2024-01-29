// postmanValidations.js
const { body } = require("express-validator");

const postmanValidations = [
  body("p_id")
    .isInt()
    .notEmpty()
    .withMessage("p_id must be a non-empty integer"),
  body("oid").isInt().notEmpty().withMessage("oid must be a non-empty integer"),
];

module.exports = postmanValidations;
