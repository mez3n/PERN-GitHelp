const Order = require("../services/orders");

const ordersController = {
  getAllOrders: async (req, res) => {
    const oid = req.params.oid;

    try {
      const orders = await Order.getAllOrders(oid);
      res.json({ orders });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createOrder: async (req, res) => {
    const newOrder = req.body;

    try {
      const createdOrder = await Order.createOrder(newOrder);
      res.status(201).json(createdOrder);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateOrder: async (req, res) => {
    const orderid = req.params.orderid;
    const oid = req.params.oid;
    const updatedOrder = req.body;

    try {
      const order = await Order.updateOrder(orderid, oid, updatedOrder);

      if (order) {
        res.json(order);
      } else {
        res.status(404).json({ error: "Order not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  updateOrderState: async (req, res) => {
    const orderid = req.params.orderid;
    const oid = req.params.oid;
    const updatedOrder = req.body;
    try {
      const order = await Order.updateOrderState(orderid, oid, updatedOrder);
      if (order) {
        res.json(order);
      } else {
        res.status(404).json({ error: "Order not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  setPostman: async (req, res) => {
    const orderid = req.params.orderid;
    const oid = req.params.oid;
    const { postman_id } = req.body;
    try {
      const orderidint = parseInt(req.params.orderid);
      const oidint = parseInt(req.params.oid);
      const postman_idint = parseInt(req.body.postman_id);

      if (isNaN(orderidint) || isNaN(oidint) || isNaN(postman_idint)) {
        return res.status(400).json({
          error: "Invalid order ID, organization ID, or postman ID format",
        });
      }
      const order = await Order.setPostman(orderid, oid, postman_id);
      if (order) {
        res.json(order);
      } else {
        res.status(404).json({ error: "Order not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  updateOrderPostman: async (req, res) => {
    const orderid = req.params.orderid;
    const oid = req.params.oid;
    const updatedOrder = req.body;
    try {
      const order = await Order.updateOrderPostman(orderid, oid, updatedOrder);
      if (order) {
        res.json(order);
      } else {
        res.status(404).json({ error: "Order not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  deleteOrder: async (req, res) => {
    const orderid = req.params.orderid;
    const oid = req.params.oid;

    try {
      const deletedOrder = await Order.deleteOrder(orderid, oid);

      if (deletedOrder) {
        res.json({ message: "Order deleted successfully" });
      } else {
        res.status(404).json({ error: "Order not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = ordersController;
