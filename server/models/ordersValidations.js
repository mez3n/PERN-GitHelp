const { body } = require("express-validator");

const ordersValidations = [
  body("content")
    .isString()
    .notEmpty()
    .withMessage("Content must be a non-empty string"),
  body("Type")
    .isString()
    .notEmpty()
    .withMessage("Type must be a non-empty string"),
  body("delivery_date")
    .isISO8601()
    .notEmpty()
    .withMessage("Delivery date must be a non-empty ISO8601 date"),
  body("priority")
    .isInt()
    .notEmpty()
    .withMessage("Priority must be a non-empty integer"),
  body("postman_id")
    .optional()
    .isInt()
    .withMessage("Postman ID must be an integer"),
  body("state")
    .isInt()
    .notEmpty()
    .withMessage("State must be a non-empty integer"),
];

module.exports = ordersValidations;
