import React, { useState, useEffect } from "react";

const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  const fetchOrders = () => {
    fetch("https://backendfvorders.onrender.com/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  };

  const fetchProducts = () => {
    fetch("https://backendfvorders.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchOrders();
    fetchProducts();
  }, []);

  const updateOrderStatus = (id, status) => {
    fetch(`https://backendfvorders.onrender.com/api/orders/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then(() => fetchOrders());
  };

  const addProduct = () => {
    const { name, price } = newProduct;
    fetch("https://backendfvorders.onrender.com/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price }),
    })
      .then((res) => res.json())
      .then(() => {
        fetchProducts();
        setNewProduct({ name: "", price: "" });
      });
  };

  const updateProduct = (id, name, price) => {
    fetch(`https://backendfvorders.onrender.com/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price }),
    }).then(() => fetchProducts());
  };

  const deleteProduct = (id) => {
    fetch(`https://backendfvorders.onrender.com/api/products/${id}`, {
      method: "DELETE",
    }).then(() => fetchProducts());
  };

  // --- Styles ---
  const styles = {
    container: {
      backgroundColor: "#f4f4f4",
      padding: "30px",
      fontFamily: "Arial, sans-serif",
    },
    section: {
      marginBottom: "40px",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    },
    title: {
      textAlign: "center",
      fontSize: "24px",
      marginBottom: "20px",
      color: "#2c3e50",
    },
    orderCard: {
      marginBottom: "15px",
      padding: "15px",
      border: "1px solid #ccc",
      borderRadius: "8px",
    },
    productRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "10px",
    },
    input: {
      padding: "8px",
      marginRight: "8px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "8px 12px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      backgroundColor: "#3498db",
      color: "#fff",
    },
    dangerButton: {
      backgroundColor: "#e74c3c",
      color: "#fff",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <h2 style={styles.title}>🛒 Orders</h2>
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id} style={styles.orderCard}>
              <p><strong>Name:</strong> {order.name}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Contact:</strong> {order.contact}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <select
                value={order.status}
                onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                style={styles.input}
              >
                <option>Pending</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Delivered</option>
              </select>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>📦 Products</h2>
        {products.map((product) => (
          <div key={product.id} style={styles.productRow}>
            <input
              type="text"
              defaultValue={product.name}
              style={styles.input}
              onBlur={(e) =>
                updateProduct(product.id, e.target.value, product.price)
              }
            />
            <input
              type="number"
              defaultValue={product.price}
              style={styles.input}
              onBlur={(e) =>
                updateProduct(product.id, product.name, e.target.value)
              }
            />
            <button
              onClick={() => deleteProduct(product.id)}
              style={{ ...styles.button, ...styles.dangerButton }}
            >
              Delete
            </button>
          </div>
        ))}

        <div style={{ marginTop: "20px" }}>
          <h4>Add New Product</h4>
          <input
            type="text"
            placeholder="Name"
            style={styles.input}
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Price"
            style={styles.input}
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
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
