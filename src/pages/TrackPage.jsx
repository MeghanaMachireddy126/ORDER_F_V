import React, { useState } from "react";

const TrackPage = () => {
  const [orderId, setOrderId]       = useState("");
  const [orderDetails, setOrderDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  /* ---------- track handler ---------- */
  const handleTrack = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setOrderDetails(null);

    try {
      const cleanedId = orderId.replace(":", "").trim();
      const response  = await fetch(
        `https://backendfvorders.onrender.com/api/orders/${cleanedId}`
      );
      const data = await response.json();

      if (response.ok && data && data.id) {
        setOrderDetails(data);
      } else {
        setErrorMessage("Order not found");
      }
    } catch (err) {
      console.error("Error tracking order:", err);
      setErrorMessage("Something went wrong");
    }
  };

  /* ---------- inline styles ---------- */
  const containerStyle = {
    backgroundColor: "#fff8f0",
    padding: "30px",
    minHeight: "100vh",
    fontFamily: "sans-serif",
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#2980b9",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const resultStyle = {
    marginTop: "20px",
    backgroundColor: "#eafaf1",
    padding: "10px",
    borderRadius: "5px",
  };

  /* ---------- render ---------- */
  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", color: "#333" }}>📦 Track Your Order</h2>

      <form style={formStyle} onSubmit={handleTrack}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value.replace(":", "").trim())}
          required
        />
        <button style={buttonStyle} type="submit">
          🔍 Track
        </button>
      </form>

      {errorMessage && (
        <div style={resultStyle}>
          <p style={{ color: "red" }}>{errorMessage}</p>
        </div>
      )}

      {orderDetails && (
        <div style={resultStyle}>
          <p><strong>Name:</strong> {orderDetails.name}</p>
          <p><strong>Address:</strong> {orderDetails.address}</p>
          <p><strong>Contact:</strong> {orderDetails.contact}</p>
          <p><strong>Status:</strong> {orderDetails.status}</p>
        </div>
      )}
    </div>
  );
};

export default TrackPage;
