import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CataloguePage from "./pages/CataloguePage";
import OrderPage from "./pages/OrderPage";
import TrackPage from "./pages/TrackPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <div style={headerStyle}>
        <Link to="/" style={buttonStyle}>Catalogue</Link>
        <Link to="/order" style={buttonStyle}>Order</Link>
        <Link to="/track" style={buttonStyle}>Track</Link>
        <Link to="/admin" style={buttonStyle}>Admin</Link>
      </div>

      <Routes>
        <Route path="/" element={<CataloguePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/track" element={<TrackPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

const headerStyle = {
  backgroundColor: "#e0f7fa",
  padding: "16px",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "30px",
};

const buttonStyle = {
  backgroundColor: "#ffffff",
  color: "#00796b",
  textDecoration: "none",
  padding: "10px 20px",
  fontWeight: "600",
  borderRadius: "8px",
  border: "2px solid #00796b",
  transition: "all 0.3s ease",
};

const buttonHoverStyle = {
  backgroundColor: "#00796b",
  color: "#ffffff",
};

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      Object.assign(link.style, buttonHoverStyle);
    });
    link.addEventListener("mouseleave", () => {
      Object.assign(link.style, buttonStyle);
    });
  });
});

export default App;
