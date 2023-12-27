const { Router } = require("express");
const authController = require("../controllers/auth.controller.js");
const authMiddleware = require("../middlewares/auth.middleware.js");
const SignupValidations = require("../models/SignupValidations.js");
const LoginValidations = require("../models/LoginValidations.js");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const authRouter = Router();
authRouter.post(
  "/signup",
  SignupValidations,
  handleValidationErrors,
  authController.signup
);
authRouter.post(
  "/login",
  LoginValidations,
  handleValidationErrors,
  authController.login
);
authRouter.get("/me", authMiddleware, authController.me);
module.exports = authRouter;
