const { body } = require("express-validator");

const usersValidations = [
  body("user_name")
    .isString()
    .notEmpty()
    .withMessage("Username must be a non-empty string"),
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Name must be a non-empty string"),
  body("password")
    .isString()
    .notEmpty()
    .withMessage("Password must be a non-empty string"),
  body("email").isEmail().withMessage("Invalid email address"),
  body("phone_number")
    .isString()
    .notEmpty()
    .withMessage("Phone number must be a non-empty string"),
  body("bio")
    .isString()
    .notEmpty()
    .withMessage("Bio must be a non-empty string"),
  body("image_id")
    .optional()
    .isInt()
    .withMessage("Image ID must be an integer"),
];

module.exports = usersValidations;
