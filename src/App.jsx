import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ShippingInfo from "./pages/ShippingInfo";
import Returns from "./pages/Returns";
import { CartProvider } from "./context/CartContext";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function ProtectedRoute({ element }) {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token"); // Example authentication check

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? element : null;
}

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* <Route path="/logout"  /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<ProtectedRoute element={<Home />} />} />
              <Route
                path="/products"
                element={<ProtectedRoute element={<Products />} />}
              />
              <Route
                path="/cart"
                element={<ProtectedRoute element={<Cart />} />}
              />
              <Route
                path="/checkout"
                element={<ProtectedRoute element={<Checkout />} />}
              />
              <Route
                path="/orders"
                element={<ProtectedRoute element={<Orders />} />}
              />
              <Route
                path="/about"
                element={<ProtectedRoute element={<About />} />}
              />
              <Route
                path="/contact"
                element={<ProtectedRoute element={<Contact />} />}
              />
              <Route
                path="/shipping"
                element={<ProtectedRoute element={<ShippingInfo />} />}
              />
              <Route
                path="/returns"
                element={<ProtectedRoute element={<Returns />} />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
