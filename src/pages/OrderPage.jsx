import React, { useState } from "react";

const OrderPage = () => {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, product, quantity }),
    });

    const data = await response.json();
    if (data.success) {
      alert(`Order placed! Your ID is ${data.id}`);
      setName("");
      setProduct("");
      setQuantity("");
    } else {
      alert("Something went wrong");
    }
  };

  const container = {
    backgroundColor: "#fdfaf6",
    padding: "30px",
    minHeight: "100vh",
    fontFamily: "Arial"
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return (
    <div style={container}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Place Your Order</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input style={inputStyle} type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input style={inputStyle} type="text" placeholder="Product" value={product} onChange={(e) => setProduct(e.target.value)} />
        <input style={inputStyle} type="text" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button style={buttonStyle} type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderPage;
