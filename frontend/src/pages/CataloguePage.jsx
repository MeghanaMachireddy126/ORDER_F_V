import React from "react";

const CataloguePage = () => {
  const containerStyle = {
    backgroundColor: "#f4faff",
    padding: "30px",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif"
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "30px",
    color: "#2c3e50"
  };

  const productCardStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px auto",
    maxWidth: "400px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  };

  const productNameStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold"
  };

  const priceStyle = {
    color: "#27ae60",
    marginTop: "5px"
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Product Catalogue</h2>
  
      <div style={productCardStyle}>
        <div style={productNameStyle}>Tomatoes</div>
        <div style={priceStyle}>₹20/kg</div>
      </div>
      <div style={productCardStyle}>
        <div style={productNameStyle}>Bananas</div>
        <div style={priceStyle}>₹30/dozen</div>
      </div>
      <div style={productCardStyle}>
        <div style={productNameStyle}>Potatoes</div>
        <div style={priceStyle}>₹25/kg</div>
      </div>
      <div style={productCardStyle}>
        <div style={productNameStyle}>Onions</div>
        <div style={priceStyle}>₹22/kg</div>
      </div>
      <div style={productCardStyle}>
        <div style={productNameStyle}>Apples</div>
        <div style={priceStyle}>₹120/kg</div>
      </div>
      <div style={productCardStyle}>
        <div style={productNameStyle}>Carrots</div>
        <div style={priceStyle}>₹40/kg</div>
      </div>
      <div style={productCardStyle}>
        <div style={productNameStyle}>Spinach</div>
        <div style={priceStyle}>₹15/bunch</div>
      </div>
      <div style={productCardStyle}>
        <div style={productNameStyle}>Mangoes</div>
        <div style={priceStyle}>₹100/kg</div>
      </div>
      <div style={productCardStyle}>
        <div style={productNameStyle}>Cucumbers</div>
        <div style={priceStyle}>₹18/kg</div>
      </div>
      <div style={productCardStyle}>
        <div style={productNameStyle}>Green Chilies</div>
        <div style={priceStyle}>₹60/kg</div>
      </div>
      <div style={productCardStyle}>
        <div style={productNameStyle}>Cauliflower</div>
        <div style={priceStyle}>₹35/piece</div>
      </div>
      <div style={productCardStyle}>
        <div style={productNameStyle}>Garlic</div>
        <div style={priceStyle}>₹80/kg</div>
      </div>
      <div style={productCardStyle}>
        <div style={productNameStyle}>Ginger</div>
        <div style={priceStyle}>₹70/kg</div>
      </div>
      <div style={productCardStyle}>
        <div style={productNameStyle}>Pineapples</div>
        <div style={priceStyle}>₹50/piece</div>
      </div>
      <div style={productCardStyle}>
        <div style={productNameStyle}>Papayas</div>
        <div style={priceStyle}>₹45/kg</div>
      </div>
    </div>
  );
  
};

export default CataloguePage;
