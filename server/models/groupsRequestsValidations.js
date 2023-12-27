const { body } = require("express-validator");

const groupsRequestsValidations = [
  body("group_user_id")
    .isInt()
    .notEmpty()
    .withMessage("Group User ID must be a non-empty integer"),
  body("GID")
    .isInt()
    .notEmpty()
    .withMessage("Group ID must be a non-empty integer"),
];

module.exports = groupsRequestsValidations;
