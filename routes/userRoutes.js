const express = require("express");
const userController = require("../controllers/userController.js");
const usersValidations = require("../models/usersValidations.js");

const router = express.Router();

// Get all users
router.get("/", userController.getAllUsers);

// Get a specific user by ID
router.get("/:id", userController.getUserById);

// Create a new user
router.post("/", usersValidations, userController.createUser);

// Update a user by ID
router.put("/:id", usersValidations, userController.updateUser);

// Delete a user by ID
router.delete("/:id", userController.deleteUser);

module.exports = router;
