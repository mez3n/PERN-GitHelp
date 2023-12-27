const { body } = require("express-validator");

const personalCommentsValidations = [
  body("ppid")
    .isInt()
    .notEmpty()
    .withMessage("ppid must be a non-empty integer"),
  body("pcid")
    .isInt()
    .notEmpty()
    .withMessage("pcid must be a non-empty integer"),
  body("date").isISO8601().notEmpty().withMessage("Invalid date format"),
  body("text")
    .isString()
    .notEmpty()
    .withMessage("Text must be a non-empty string"),
  body("commenter_uid")
    .isInt()
    .notEmpty()
    .withMessage("commenter_uid must be a non-empty integer"),
];

module.exports = personalCommentsValidations;
