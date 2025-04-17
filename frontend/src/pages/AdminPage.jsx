import React, { useState, useEffect } from "react";

const AdminPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const containerStyle = {
    backgroundColor: "#f7f9fc",
    padding: "30px",
    fontFamily: "Arial"
  };

  const titleStyle = {
    textAlign: "center",
    color: "#2c3e50",
    fontSize: "1.8rem"
  };

  const orderStyle = {
    backgroundColor: "#fff",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "8px",
    boxShadow: "0 1px 5px rgba(0,0,0,0.1)"
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Admin Dashboard</h2>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} style={orderStyle}>
            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Product:</strong> {order.product}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
          </div>
        ))
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
};

export default AdminPage;

  