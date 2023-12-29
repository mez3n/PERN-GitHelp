const express = require("express");
const ordersController = require("../controllers/ordersController");
const ordersValidations = require("../models/ordersValidations");
const handleValidationErrors = require("../middlewares/handleValidationErrors");

const router = express.Router();
// Get all orders
router.get("/:oid", ordersController.getAllOrders);

// Create a new order
router.post(
  "/",
  ordersValidations,
  handleValidationErrors,
  ordersController.createOrder
);

// Update an order by ID
router.put(
  "/:orderid/:oid",
  ordersValidations,
  handleValidationErrors,
  ordersController.updateOrder
);

router.put(
  "/state/:orderid/:oid",
  ordersValidations,
  handleValidationErrors,
  ordersController.updateOrderState
);
router.put(
  "/:id",
  ordersValidations,
  handleValidationErrors,
  ordersController.updateOrderPostman
);
// Delete an order by ID
router.delete("/:orderid/:oid", ordersController.deleteOrder);

module.exports = router;
