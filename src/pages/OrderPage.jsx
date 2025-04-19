import React, { useState } from "react";

const OrderPage = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [items, setItems] = useState([{ product_id: "", quantity: "" }]);

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { product_id: "", quantity: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("ttps://backendfvorders.onrender.com/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, address, contact, items }),
    });

    const data = await response.json();
    if (response.ok) {
      alert(`✅ Order placed successfully! Your order ID is ${data.id}`);
      setName("");
      setAddress("");
      setContact("");
      setItems([{ product_id: "", quantity: "" }]);
    } else {
      alert("❌ Something went wrong: " + data.error);
    }
  };

  const container = {
    backgroundColor: "#fdfaf6",
    padding: "30px",
    minHeight: "100vh",
    fontFamily: "Arial",
  };

  const formStyle = {
    maxWidth: "600px",
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
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div style={container}>
      <h2 style={{ textAlign: "center", color: "#333" }}>🛒 Place Your Order</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          style={inputStyle}
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          style={inputStyle}
          type="text"
          placeholder="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />

        <h4>Items:</h4>
        {items.map((item, index) => (
          <div key={index}>
            <input
              style={inputStyle}
              type="text"
              placeholder="Product Name -> Product id(1-19)"
              value={item.product_id}
              onChange={(e) =>
                handleItemChange(index, "product_id", e.target.value)
              }
              required
            />
            <input
              style={inputStyle}
              type="number"
              placeholder="Quantity"
              value={item.quantity}
              onChange={(e) =>
                handleItemChange(index, "quantity", e.target.value)
              }
              required
            />
          </div>
        ))}

        <button
          type="button"
          style={{ ...buttonStyle, backgroundColor: "#3498db" }}
          onClick={addItem}
        >
          ➕ Add Item
        </button>

        <br />
        <button style={buttonStyle} type="submit">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default OrderPage;
