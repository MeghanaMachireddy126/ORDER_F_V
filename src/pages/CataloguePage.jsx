import React from "react";

const CataloguePage = () => {
  const products = [
    { name: "Tomatoes", price: "₹20/kg", image: "https://img.icons8.com/color/96/tomato.png" },
    { name: "Bananas", price: "₹30/dozen", image: "https://img.icons8.com/color/96/banana.png" },
    { name: "Potatoes", price: "₹25/kg", image: "https://img.icons8.com/color/96/potato.png" },
    { name: "Onions", price: "₹22/kg", image: "https://img.icons8.com/color/96/onion.png" },
    { name: "Apples", price: "₹120/kg", image: "https://img.icons8.com/color/96/apple.png" },
    { name: "Carrots", price: "₹40/kg", image: "https://img.icons8.com/color/96/carrot.png" },
    { name: "Spinach", price: "₹15/bunch", image: "https://img.icons8.com/color/96/spinach.png" },
    { name: "Mangoes", price: "₹100/kg", image: "https://img.icons8.com/color/96/mango.png" },
    { name: "Cucumbers", price: "₹18/kg", image: "https://img.icons8.com/color/96/cucumber.png" },
    { name: "Green Chilies", price: "₹60/kg", image: "https://img.icons8.com/color/96/chili-pepper.png" },
    { name: "Cauliflower", price: "₹35/piece", image: "https://img.icons8.com/color/96/cauliflower.png" },
    { name: "Garlic", price: "₹80/kg", image: "https://img.icons8.com/color/96/garlic.png" },
    { name: "Ginger", price: "₹70/kg", image: "https://img.icons8.com/color/96/ginger.png" },
    { name: "Pineapples", price: "₹50/piece", image: "https://img.icons8.com/color/96/pineapple.png" },
    { name: "Papayas", price: "₹45/kg", image: "https://img.icons8.com/color/96/papaya.png" },
  ];

  const containerStyle = {
    background: "linear-gradient(to right, #e0f7fa, #ffffff)",
    padding: "40px 20px",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', sans-serif"
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "40px"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
    maxWidth: "1200px",
    margin: "0 auto"
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease",
  };

  const imageStyle = {
    width: "80px",
    height: "80px",
    objectFit: "contain",
    marginBottom: "10px",
    borderRadius: "8px",
  };

  const nameStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#37474f"
  };

  const priceStyle = {
    fontSize: "1rem",
    color: "#2e7d32",
    marginTop: "6px"
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>🛒 Fresh Product Catalogue</h2>

      <div style={gridStyle}>
        {products.map((product, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {product.image && (
              <img src={product.image} alt={product.name} style={imageStyle} />
            )}
            <div style={nameStyle}>{product.name}</div>
            <div style={priceStyle}>{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CataloguePage;
