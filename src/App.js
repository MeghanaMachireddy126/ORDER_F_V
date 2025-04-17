import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CataloguePage from "./pages/CataloguePage";
import OrderPage from "./pages/OrderPage";
import TrackPage from "./pages/TrackPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <div className="p-4 bg-green-100 mb-6 flex gap-4">
        <Link to="/" className="text-green-700 font-bold">Catalogue</Link>
        <Link to="/order" className="text-green-700 font-bold">Order</Link>
        <Link to="/track" className="text-green-700 font-bold">Track</Link>
        <Link to="/admin" className="text-green-700 font-bold">Admin</Link>
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

export default App;
