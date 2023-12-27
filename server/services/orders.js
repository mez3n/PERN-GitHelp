const pool = require("../DB/db");

class Order {
  static async getAllOrders(oid) {
    const result = await pool.query("SELECT * FROM orders WHERE oid = $1", [
      oid,
    ]);
    return result.rows;
  }

  static async createOrder(newOrder) {
    const result = await pool.query(
      "INSERT INTO orders(oid, uid, content, Type, delivery_date, priority, postman_id, state) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        newOrder.oid,
        newOrder.uid,
        newOrder.content,
        newOrder.Type,
        newOrder.delivery_date,
        newOrder.priority,
        newOrder.postman_id,
        newOrder.state,
      ]
    );

    return result.rows[0];
  }

  static async updateOrder(orderid, oid, updatedOrder) {
    const result = await pool.query(
      "UPDATE orders SET content = $1, Type = $2, delivery_date = $3, priority = $4, postman_id = $5, state = $6 WHERE orderid = $7 AND oid = $8 RETURNING *",
      [
        updatedOrder.content,
        updatedOrder.Type,
        updatedOrder.delivery_date,
        updatedOrder.priority,
        updatedOrder.postman_id,
        updatedOrder.state,
        orderid,
        oid,
      ]
    );

    return result.rows[0];
  }

  static async deleteOrder(orderid, oid) {
    const result = await pool.query(
      "DELETE FROM orders WHERE orderid = $1 AND oid = $2 RETURNING *",
      [orderid, oid]
    );
    return result.rows[0];
  }
}

module.exports = Order;
