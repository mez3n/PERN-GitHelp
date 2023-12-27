const { body } = require("express-validator");

const adminGroupsRequestsValidations = [
  body("group_user_id")
    .isInt()
    .notEmpty()
    .withMessage("Group User ID must be a non-empty integer"),
  body("GID")
    .isInt()
    .notEmpty()
    .withMessage("Group ID must be a non-empty integer"),
  body("A_ID")
    .isInt()
    .notEmpty()
    .withMessage("Admin ID must be a non-empty integer"),
  body("state")
    .isBoolean()
    .notEmpty()
    .withMessage("State must be a non-empty boolean"),
];

module.exports = adminGroupsRequestsValidations;
