const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

// Get all admins
router.get('/', adminController.getAllAdmins);

// Get a specific admin by ID
router.get('/:id', adminController.getAdminById);

// Create a new admin
router.post('/', adminController.createAdmin);

// Update an admin by ID
router.put('/:id', adminController.updateAdmin);

// Delete an admin by ID
router.delete('/:id', adminController.deleteAdmin);

module.exports = router;
