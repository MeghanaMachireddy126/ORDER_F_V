import React, { useState, useEffect } from "react";

const API = "https://f-v-orders.onrender.com";

const AdminPage = () => {
  const [orders, setOrders]   = useState([]);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  /* ---------- fetch helpers ---------- */
  const fetchOrders   = () =>
    fetch(`${API}/api/orders`).then(r => r.json()).then(setOrders);

  const fetchProducts = () =>
    fetch(`${API}/api/products`).then(r => r.json()).then(setProducts);

  useEffect(() => { fetchOrders(); fetchProducts(); }, []);

  /* ---------- CRUD actions ---------- */
  const updateOrderStatus = (id, status) =>
    fetch(`${API}/api/orders/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    }).then(() => fetchOrders());

  const addProduct = () => {
    const { name, price } = newProduct;
    if (!name || !price) return;
    fetch(`${API}/api/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price }),
    })
      .then(() => { fetchProducts(); setNewProduct({ name: "", price: "" }); });
  };

  const updateProduct = (id, name, price) =>
    fetch(`${API}/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price }),
    }).then(() => fetchProducts());

  const deleteProduct = (id) =>
    fetch(`${API}/api/products/${id}`, { method: "DELETE" })
      .then(() => fetchProducts());

  /* ---------- inline styles ---------- */
  const styles = {
    container: { background: "#f4f4f4", padding: 30, fontFamily: "Arial" },
    section:   { marginBottom: 40, background: "#fff", padding: 20,
                 borderRadius: 10, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" },
    title:     { textAlign: "center", fontSize: 24, marginBottom: 20,
                 color: "#2c3e50" },
    orderCard: { marginBottom: 15, padding: 15, border: "1px solid #ccc",
                 borderRadius: 8 },
    productRow:{ display: "flex", alignItems: "center",
                 justifyContent: "space-between", marginBottom: 10 },
    input:     { padding: 8, marginRight: 8, borderRadius: 4,
                 border: "1px solid #ccc" },
    button:    { padding: "8px 12px", border: "none", borderRadius: 4,
                 cursor: "pointer", background: "#3498db", color: "#fff" },
    dangerButton:{ background: "#e74c3c" },
  };

  /* ---------- render ---------- */
  return (
    <div style={styles.container}>
      {/* Orders */}
      <div style={styles.section}>
        <h2 style={styles.title}>🛒 Orders</h2>
        {orders.length ? orders.map(o => (
          <div key={o.id} style={styles.orderCard}>
            <p><strong>Name:</strong> {o.name}</p>
            <p><strong>Address:</strong> {o.address}</p>
            <p><strong>Contact:</strong> {o.contact}</p>
            <p><strong>Status:</strong> {o.status}</p>
            <select
              value={o.status}
              onChange={e => updateOrderStatus(o.id, e.target.value)}
              style={styles.input}
            >
              <option>Pending</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
            </select>
          </div>
        )) : <p>No orders found.</p>}
      </div>

      {/* Products */}
      <div style={styles.section}>
        <h2 style={styles.title}>📦 Products</h2>
        {products.map(p => (
          <div key={p.id} style={styles.productRow}>
            <input
              type="text"
              defaultValue={p.name}
              style={styles.input}
              onBlur={e => updateProduct(p.id, e.target.value, p.price_per_unit)}
            />
            <input
              type="number"
              defaultValue={p.price_per_unit}
              style={styles.input}
              onBlur={e => updateProduct(p.id, p.name, e.target.value)}
            />
            <button
              onClick={() => deleteProduct(p.id)}
              style={{ ...styles.button, ...styles.dangerButton }}
            >
              Delete
            </button>
          </div>
        ))}

        {/* Add new product */}
        <div style={{ marginTop: 20 }}>
          <h4>Add New Product</h4>
          <input
            type="text"
            placeholder="Name"
            style={styles.input}
            value={newProduct.name}
            onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            style={styles.input}
            value={newProduct.price}
            onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <button onClick={addProduct} style={styles.button}>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
