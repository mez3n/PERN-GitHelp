const { body } = require("express-validator");

const personalCommentsValidations = [
  body("date").isISO8601().notEmpty().withMessage("Invalid date format"),
  body("text")
    .isString()
    .notEmpty()
    .withMessage("Text must be a non-empty string"),
  body("pcid")
    .isInt()
    .notEmpty()
    .withMessage("pcid must be a non-empty integer"),
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

module.exports = personalCommentsValidations;
