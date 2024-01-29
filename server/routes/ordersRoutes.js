const express = require("express");
const ordersController = require("../controllers/ordersController");
const ordersValidations = require("../models/ordersValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");
const {isAdminMiddleware,isGroupAdmin,isPatientMiddleware,isOrganizationMiddleware,isVolunteerMiddleware,
  isRepresentativeMiddleware,isPatientOrRepresentativeMiddleware} = require('../middlewares/permissions.middleware.js');
  const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();
// Get all orders
router.get("/:oid", ordersController.getAllOrders);

// Create a new order
router.post(
  "/",
  ordersValidations,
  handleValidationErrors,
  authMiddleware,
  isVolunteerMiddleware,
  ordersController.createOrder
);

// Update an order by ID
router.put(
  "/:orderid/:oid",
  ordersValidations,
  handleValidationErrors,
  authMiddleware,
  isVolunteerMiddleware,
  ordersController.updateOrder
);
router.put(
  "/setpostman/:orderid/:oid",
  handleValidationErrors,
  ordersController.setPostman
);
router.put(
  "/state/:orderid/:oid",
  ordersValidations,
  handleValidationErrors,
  authMiddleware,
  isVolunteerMiddleware,
  ordersController.updateOrderState
);
router.put(
  "/:id",
  ordersValidations,
  handleValidationErrors,
  authMiddleware,
  isVolunteerMiddleware,
  ordersController.updateOrderPostman
);
// Delete an order by ID
router.delete("/:orderid/:oid",isVolunteerMiddleware, ordersController.deleteOrder);

module.exports = router;
